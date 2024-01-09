import React from "react";
import {Game} from "../../models/game";
import {GameListTile} from "./gameListTile";

class GameListData {
    public games : Game[] = undefined!;
}

export function GameList(props : Readonly<GameListData>) {
    return (
        <>
            {props.games.map(g => <div key={g.id} className={'m-1'}><GameListTile key={g.id} game={g}/></div>)}
        </>
    );
}
