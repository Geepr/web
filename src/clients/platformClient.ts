import Platform from "../models/platform";
import PlatformFilter from "../models/platformFilter";
import PlatformCreateDto from "../models/platformCreateDto";
import PlatformEditDto from "../models/platformEditDto";
import {createObject, submitObjectEdit, useObjectFetch, useObjectsFetch, objectsPromiseFetch} from "./commonClient";

export function usePlatformsFetch(page : number, filter : PlatformFilter) {
    return useObjectsFetch<{platforms : Platform[]}>('v0/platforms', page, filter.getQueryString());
}

export function fetchPlatforms(page : number, filter : PlatformFilter) {
    return objectsPromiseFetch<{platforms : Platform[]}>('v0/platforms', page, filter.getQueryString())
}

export function usePlatformFetch(id : string) {
    return useObjectFetch<Platform>('v0/platforms', id);
}

export function submitPlatformEdit(data : PlatformEditDto) {
    return submitObjectEdit('v0/platforms', data.id, data);
}

export function createPlatform(data : PlatformCreateDto) {
    return createObject('v0/platforms', data);
}
