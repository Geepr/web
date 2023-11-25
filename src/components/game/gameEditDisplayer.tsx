import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useGameFetch} from "../../clients/gameClient";
import GameEditForm from "./gameEditForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export default function GameEditDisplayer() {
    const {gameId} = useParams();
    const {game, loading} = useGameFetch(gameId!);
    const navigate = useNavigate();

    if (loading)
        return <div>Loading...</div>
    if (game == null)
        return <div>Game not found...</div>

    return <>
        <div className='row mb-3'>
            <div className='col-1'>
                <button className='btn btn-dark d-flex' onClick={() => navigate(-1)}><FontAwesomeIcon className='d-flex flex-fill' icon={faAngleLeft}/></button>
            </div>
        </div>
        <GameEditForm game={game}/>
    </>
}
