import React from "react";
import {Game} from "../../models/game";
import {GameListTile} from "./gameListTile";

class GameListData {
    public games : Game[] = null!;
}

export function GameList(data : Readonly<GameListData>) {
    return (
        <>
            {data.games.map(g => <div key={g.id} className={'m-1'}><GameListTile key={g.id} game={g}/></div>)}
        </>
    );
}
