import {useEffect, useState} from "react";
import {Game} from "../models/game";
import {validate as isValidUuid} from "uuid";
import {
    PaginationData,
    readPaginationDataFromJson
} from "../components/pagination/paginationHelpers";
import GameFilter from "../models/gameFilter";
import GameEditDto from "../models/gameEditDto";
import GameCreateDto from "../models/gameCreateDto";

export function useGameFetch(id : string) {
    const [game, setGame] = useState<Game | undefined>();
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

export function useGamesFetch(page : number, filter : GameFilter) {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState<PaginationData>();

    useEffect(() => {
        async function load() {
            try {
                //todo: page size shouldn't be required here, really
                const response = await fetch(`http://localhost:5510/api/v0/games?page=${page}&pageSize=20&title=${filter.title}`);
                if (response.ok) {
                    const json = await response.json();
                    setPaginationData(readPaginationDataFromJson(json));
                    setGames(json.games);
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

    return {games, loading, paginationData};
}

export async function submitGameEdit(id : string, data : GameEditDto) {
    const response = await fetch(`http://localhost:5510/api/v0/games/${id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.ok;
}

export async function deleteGame(id : string) {
    const response = await fetch(`http://localhost:5510/api/v0/games/${id}`, {
        method: 'delete',
    });
    return response.ok;
}

export async function createGame(data : GameCreateDto) {
    const response = await fetch(`http://localhost:5510/api/v0/games`, {
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
