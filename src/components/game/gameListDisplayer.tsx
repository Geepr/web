import {useGamesFetch} from "../../clients/gameClient";
import {GameList} from "./gameList";
import {useState} from "react";
import {PageControl} from "../pagination/pageControl";

export function GameListDisplayer() {
    const [page, setPage] = useState(1)
    const {games, loading, paginationData} = useGamesFetch(page);
    
    if (loading) {
        return <div>Loading...</div>
    }
    return <>
        <GameList games={games}/>
        <PageControl Page={page} TotalPages={paginationData?.TotalPages ?? 0} SetPage={setPage}/>
    </>;
}
