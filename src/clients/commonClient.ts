import {useEffect, useState} from "react";
import {PaginationData, readPaginationDataFromJson} from "../components/pagination/paginationHelpers";
import {validate as isValidUuid} from "uuid";

export interface ObjectFilter {
    getQueryString() : string;
}

function getGatewayUrl() {
    return process.env.REACT_APP_GATEWAY_URL ?? 'http://localhost:5510/api';
}

export function useObjectsFetch<T>(apiEndpoint : string, page : number, filter : ObjectFilter, readObjects : (json : any) => T[]) {
    const [results, setResults] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState<PaginationData>();

    useEffect(() => {
        async function load() {
            try {
                //todo: page size shouldn't be required here, really
                const response = await fetch(`${getGatewayUrl()}/${page}&pageSize=20&${filter.getQueryString()}`);
                if (response.ok) {
                    const json = await response.json();
                    setPaginationData(readPaginationDataFromJson(json));
                    setResults(readObjects(json));
                } else {
                    throw response;
                }
            }
            finally {
                setLoading(false);
            }
        }
        load();
    }, [page, filter, apiEndpoint, readObjects]);

    return {results, loading, paginationData};
}

export function useObjectFetch<T>(apiEndpoint : string, uuid : string, readResult : (json : any) => T) {
    const [result, setResult] = useState<T | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                if (!isValidUuid(uuid))//todo: show error
                    return;
                const response = await fetch(`${getGatewayUrl()}/${apiEndpoint}/${uuid}`);
                if (response.ok) {
                    const json = await response.json();
                    setResult(readResult(json));
                } else {
                    throw response;
                }
            }
            finally {
                setLoading(false);
            }
        }
        load();
    }, [uuid, apiEndpoint, readResult]);

    return {result, loading};
}

export async function submitObjectEdit<T>(endpoint : string, id : string, data : T) {
    const response = await fetch(`${getGatewayUrl()}/${endpoint}/${id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return {success: response.ok, id};
}

export async function createObject<T>(endpoint : string, data : T) {
    const response = await fetch(`${getGatewayUrl()}/${endpoint}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const json = await response.json();
        return {success: true, id: json.id};
    }
    else
        return {success: false, id : undefined};
}

export async function deleteObject(endpoint : string, id : string) {
    const response = await fetch(`${getGatewayUrl()}/${endpoint}/${id}`, {
        method: 'delete',
    });
    return response.ok;
}
