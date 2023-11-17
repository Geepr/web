import React from "react";
import {useGameFetch} from "../../clients/gameClient";
import {GameListTile} from "./gameListTile";
import {useParams} from "react-router-dom";

export default function GameDetailsSideCar() {
    const {gameId} = useParams();
    const {game, loading} = useGameFetch(gameId!);

    if (loading)
        return <div className='col-8'>Loading...</div>

    if (game === null)
        return <div className='col-8'>Failed to load game</div>

    return (
        <div id='game-sidecar' className='col-8 my-1'>
            <div className='row border border-black'>
                <div className='col-12'>
                    <span className='text-break'><strong>{game.title}</strong></span>
                </div>
                <div className='col-12'>
                    <span className='text-break'>{game.description}</span>
                </div>
            </div>
        </div>
    )
}
