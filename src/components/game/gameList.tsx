import React from "react";
import {Game} from "../../models/game";
import {GameListTile} from "./gameListTile";

class gameListData {
    public games : Game[] = null!;
}

export function GameList(data : gameListData) {
    return (
        <>
            {data.games.map(g => <div className={'m-1'}><GameListTile key={g.id} game={g}/></div>)}
        </>
    );
}
