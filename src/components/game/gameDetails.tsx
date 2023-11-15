import React from "react";
import {useGameFetch} from "../../clients/gameClient";
import {GameListTile} from "./gameListTile";
import {useParams} from "react-router-dom";

export default function GameDetailsPathLoader() {
    const {gameId} = useParams();
    const {game, loading} = useGameFetch(gameId!);

    if (loading)
        return <div>Loading...</div>

    if (game === null)
        return <div>Failed to load game</div>

    return (
        <div id='game-sidecar' className='col-8'>
            <GameListTile game={game} />
        </div>
    )
}
