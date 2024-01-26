import {useObjectsFetch} from "./commonClient";
import GameRelease from "../models/gameRelease";

/**
 * Fetches all releases for the given game.
 */
export function useReleasesFetch(gameId : string, page : number) {
    return useObjectsFetch<{releases : GameRelease[]}>('v0/releases', page, `gameId=${gameId}`, 10);
}
