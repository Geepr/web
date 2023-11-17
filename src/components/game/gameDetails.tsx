import React from "react";
import {useGameFetch} from "../../clients/gameClient";
import {GameListTile} from "./gameListTile";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-solid-svg-icons/faRectangleXmark";

export default function GameDetailsSideCar() {
    const {gameId} = useParams();
    const {game, loading} = useGameFetch(gameId!);

    if (loading)
        return <div className='col-8'>Loading...</div>

    if (game === null)
        return <div className='col-8'>Failed to load game</div>

    return (
        <div id='game-sidecar' className='col-8 my-1 me-1'>
            <div className='row border border-black'>
                <div className='col-1 d-flex ps-0'>
                    <Link className='btn btn-primary flex-fill d-flex align-items-center' to='/games'><FontAwesomeIcon className='d-flex flex-fill' icon={faRectangleXmark}/></Link>
                </div>
                <div className='col-11'>
                    <div className='row ms-1'>
                        <div className='col-11'>
                            <span className='text-break'><strong>{game.title}</strong></span>
                        </div>
                        <div className='col-12'>
                            <span className='text-break'>{game.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
