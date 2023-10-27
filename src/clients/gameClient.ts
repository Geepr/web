import {useEffect, useState} from "react";
import {Game} from "../models/game";
import {validate as isValidUuid} from "uuid";

export function useGameFetch(id : string) {
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                if (!isValidUuid(id))//todo: show error
                    return;
                const response = await fetch(`http://localhost:5510/api/v0/games/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setGame(json);
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

    return {game, loading};
}

export function useGamesFetch(page : number) {
    //todo: extract common paging elements elsewhere
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const pageSize = 2;

    useEffect(() => {
        async function load() {
            try {
                setHasNextPage(false);
                const response = await fetch(`http://localhost:5510/api/v0/games?page=${page}&pageSize=${pageSize}`);
                if (response.ok) {
                    const json = await response.json();
                    setHasNextPage(json.length === pageSize);
                    setHasPrevPage(page !== 1);
                    setGames(json);
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

    return {games, loading, hasPrevPage, hasNextPage};
}
