import {useEffect, useState} from "react";
import {PaginationData, readPaginationDataFromJson} from "../components/pagination/paginationHelpers";
import Platform from "../models/platform";

export function usePlatformsFetch(page : number) {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState<PaginationData>();

    useEffect(() => {
        async function load() {
            try {
                //todo: page size shouldn't be required here, really
                const response = await fetch(`http://localhost:5510/api/v0/platforms?page=${page}&pageSize=20`);
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
    }, [page]);

    return {platforms, loading, paginationData};
}
