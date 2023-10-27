import {useGamesFetch} from "../../clients/gameClient";
import {GameList} from "./gameList";
import {useState} from "react";

export function GameListDisplayer() {
    const [page, setPage] = useState(1)
    const {games, loading, hasPrevPage, hasNextPage} = useGamesFetch(page);
    
    if (loading) {
        return <div>Loading...</div>
    }
    return <>
        <GameList games={games}/>
        {hasPrevPage && <button onClick={() => setPage(page - 1)}>Prev</button>}
        {hasNextPage && <button onClick={() => setPage(page + 1)}>Next</button>}
    </>;
}
