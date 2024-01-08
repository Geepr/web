import Platform from "../models/platform";
import PlatformFilter from "../models/platformFilter";
import PlatformCreateDto from "../models/platformCreateDto";
import PlatformEditDto from "../models/platformEditDto";
import {createObject, submitObjectEdit, useObjectFetch, useObjectsFetch} from "./commonClient";

export function usePlatformsFetch(page : number, filter : PlatformFilter) {
    return useObjectsFetch('v0/platforms', page, filter, json => json.platforms);
}

export function usePlatformFetch(id : string) {
    return useObjectFetch<Platform>('v0/platforms', id, json => json);
}

export async function submitPlatformEdit(id : string, data : PlatformEditDto) {
    return submitObjectEdit('v0/platforms', id, data);
}

export async function createPlatform(data : PlatformCreateDto) {
    return createObject('v0/platforms', data);
}
