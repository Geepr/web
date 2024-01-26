import {useObjectsFetch} from "./commonClient";
import GameRelease from "../models/gameRelease";

/**
 * Fetches all releases for the given game.
 */
export function useReleasesFetch(gameId : string) {
    return useObjectsFetch<{releases : GameRelease[]}>('v0/releases', 1, `gameId=${gameId}`);
}
