import {useEffect, useState} from "react";
import {PaginationData, readPaginationDataFromJson} from "../components/pagination/paginationHelpers";
import Platform from "../models/platform";
import PlatformFilter from "../models/platformFilter";
import PlatformCreateDto from "../models/platformCreateDto";
import PlatformEditDto from "../models/platformEditDto";
import {validate as isValidUuid} from "uuid";

export function usePlatformsFetch(page : number, filter : PlatformFilter) {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState<PaginationData>();

    useEffect(() => {
        async function load() {
            try {
                //todo: page size shouldn't be required here, really
                const response = await fetch(`http://localhost:5510/api/v0/platforms?page=${page}&pageSize=20&name=${filter.name}`);
                if (response.ok) {
                    const json = await response.json();
                    setPaginationData(readPaginationDataFromJson(json));
                    setPlatforms(json.platforms);
                } else {
                    throw response;
                }
            }
            finally {
                setLoading(false);
            }
        }
        load();
    }, [page, filter]);

    return {platforms, loading, paginationData};
}

export function usePlatformFetch(id : string) {
    const [platform, setPlatform] = useState<Platform | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                if (!isValidUuid(id))//todo: show error
                    return;
                const response = await fetch(`http://localhost:5510/api/v0/platforms/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPlatform(json);
                } else {
                    throw response;
                }
            }
            finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    return {platform, loading};
}

export async function submitPlatformEdit(id : string, data : PlatformEditDto) {
    const response = await fetch(`http://localhost:5510/api/v0/platforms/${id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.ok;
}

export async function createPlatform(data : PlatformCreateDto) {
    const response = await fetch(`http://localhost:5510/api/v0/platforms`, {
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
