import React from "react";
import {Game} from "../../models/game";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons/faBoxArchive";

import './gameListTile.css';
import {Link} from "react-router-dom";

class GameListTileData {
    public game : Game = null!;
}

export function GameListTile(data : Readonly<GameListTileData>) {
    const game = data.game;
    const gameDescription = game.description ?? 'This game has no description...';
    const descriptionText = game.archived ? 'This game has been archived' : gameDescription;
    const descriptionClassName = (!game.archived && !game.description) ? 'description-disabled' : '';
    const buttonDisabled = game.archived ? "disabled" : "";
    const icon = game.archived ? faBoxArchive : faAngleRight;

    return (
        <div className={"row" + (game.archived ? " game-disabled" : "") + " border border-dark"}>
            <div className={'col-12 col-sm-10'}>
                <div className={'row'}>
                    <div className="col-12">
                        <span className='text-break'><strong>{game.title}</strong></span>
                    </div>
                    <div className={"col-12 text-break"}>
                        <span className={descriptionClassName}>{descriptionText}</span>
                    </div>
                </div>
            </div>
            <div className={'col-12 col-sm-2 d-flex pe-0 ps-0 ps-sm-1'}>
                <Link to={game.id} className={'btn btn-dark d-flex flex-fill align-items-center ' + buttonDisabled}><FontAwesomeIcon className={'d-flex flex-fill'} icon={icon} /></Link>
            </div>
        </div>
    );
}
