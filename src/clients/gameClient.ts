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
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(`http://localhost:5510/api/v0/games?page=${page}`);
                if (response.ok) {
                    const json = await response.json();
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

    return {games, loading};
}
