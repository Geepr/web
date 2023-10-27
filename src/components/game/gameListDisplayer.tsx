import {useGamesFetch} from "../../clients/gameClient";
import {GameList} from "./gameList";

export function GameListDisplayer() {
    const {games, loading} = useGamesFetch(0);
    
    if (loading) {
        return <div>Loading...</div>
    }
    return <><GameList games={games}/></>;
}
