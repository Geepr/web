import {Game} from "../models/game";
import GameFilter from "../models/gameFilter";
import GameEditDto from "../models/gameEditDto";
import GameCreateDto from "../models/gameCreateDto";
import {createObject, deleteObject, submitObjectEdit, useObjectFetch, useObjectsFetch} from "./commonClient";

export function useGameFetch(id : string) {
    return useObjectFetch<Game>('v0/games', id, json => json);
}

export function useGamesFetch(page : number, filter : GameFilter) {
    return useObjectsFetch<Game>('v0/games', page, filter, json => json.games);
}

export function submitGameEdit(id : string, data : GameEditDto) {
    return submitObjectEdit('v0/games', id, data);
}

export async function deleteGame(id : string) {
    return deleteObject('v0/games', id);
}

export async function createGame(data : GameCreateDto) {
    return createObject('v0/games', data);
}
