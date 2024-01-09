import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {deleteGame, useGameFetch} from "../../clients/gameClient";

export default function GameDeleteDisplayer() {
    const {gameId} = useParams();
    const {result: game, loading} = useGameFetch(gameId!);
    const navigate = useNavigate();

    if (loading)
        return <div>Loading...</div>
    if (game == null || gameId == null)
        return <div>Game not found...</div>

    const deleteGameClick = async () => {
        try {
            await deleteGame(gameId);
            navigate('/games');
        }
        catch {
            alert('Something didn\'t go according to plan... please refresh the page and try again.');
        }
    }

    return <div className='row'>
        <div className='col-12'>
            <h3>Are you sure you want to delete {game.title}?</h3>
            <p>
                This will irreversibly remove this game and all data related to it.
                If you want to get rid of it but would like to preserve the history, consider archiving it instead.
            </p>
        </div>
        <div className='col-12 offset-sm-6 col-sm-3 d-flex'>
            <button className='btn btn-secondary flex-fill' onClick={() => navigate(-1)}>No, I've made a horrible mistake!</button>
        </div>
        <div className='col-12 col-sm-3 d-flex'>
            <button className='btn btn-danger flex-fill' onClick={deleteGameClick}>Yes, begone!</button>
        </div>
    </div>
}
