import React from "react";
import {useGameFetch} from "../../clients/gameClient";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-solid-svg-icons/faRectangleXmark";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

export default function GameDetailsSideCar() {
    const {gameId} = useParams();
    const {game, loading} = useGameFetch(gameId!);

    if (loading)
        return <div className='col-8'>Loading...</div>

    if (game === undefined)
        return <div className='col-8'>Failed to load game</div>

    return (
        <div id='game-sidecar' className='col-8 my-1 me-1'>
            <div className='row border border-black'>
                <div className='col-1 d-flex ps-0'>
                    <Link className='btn btn-primary flex-fill d-flex align-items-center' to='/games'><FontAwesomeIcon className='d-flex flex-fill' icon={faRectangleXmark}/></Link>
                </div>
                <div className='col-10'>
                    <div className='row ms-1'>
                        <div className='col-11'>
                            <span className='text-break'><strong>{game.title}</strong></span>
                        </div>
                        <div className='col-12'>
                            <span className='text-break'>{game.description}</span>
                        </div>
                    </div>
                </div>
                <div className='col-1 d-flex pe-0'>
                    <div className='row g-0 d-flex flex-fill'>
                        <div className='col-12 d-flex flex-fill'>
                            <Link className='btn btn-dark flex-fill d-flex align-items-center' title='Edit' to={`/games/edit/${gameId}`}><FontAwesomeIcon className='d-flex flex-fill' icon={faPenToSquare}/></Link>
                        </div>
                        <div className='col-12 d-flex flex-fill'>
                            <Link className='btn btn-danger flex-fill d-flex align-items-center' title='Delete' to={`/games/delete/${gameId}`}><FontAwesomeIcon className='d-flex flex-fill' icon={faTrash}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
