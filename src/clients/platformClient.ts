import {useEffect, useState} from "react";
import {PaginationData, readPaginationDataFromJson} from "../components/pagination/paginationHelpers";
import Platform from "../models/platform";
import PlatformFilter from "../models/platformFilter";
import GameCreateDto from "../models/gameCreateDto";
import PlatformCreateDto from "../models/platformCreateDto";

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
        return {success: false};
}
