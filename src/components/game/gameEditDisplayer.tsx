import React from "react";
import {useParams} from "react-router-dom";
import {useGameFetch} from "../../clients/gameClient";
import GameEditForm from "./gameEditForm";

export default function GameEditDisplayer() {
    const {gameId} = useParams();
    const {result: game, loading} = useGameFetch(gameId!);

    if (loading)
        return <div>Loading...</div>
    if (game === undefined)
        return <div>Game not found...</div>

    return <>
        <GameEditForm game={game}/>
    </>
}
