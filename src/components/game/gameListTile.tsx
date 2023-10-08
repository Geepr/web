import React from "react";
import {Game} from "../../models/game";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons/faBoxArchive";

import './gameListTile.css';

class gameListTileData {
    public game : Game = null!;
}

export function GameListTile(data : gameListTileData) {
    const game = data.game;
    const descriptionText =
        game.archived ? 'This game has been archived' :
            game.description ? game.description : 'This game has no description...';
    const descriptionClassName = (!game.archived && !game.description) ? 'description-disabled' : '';
    const buttonDisabled = game.archived ? "disabled" : "";
    const icon = game.archived ? faBoxArchive : faAngleRight;

    return (
        <div className={"row" + (game.archived ? " game-disabled" : "") + " border border-dark"}>
            <div className={'col-12 col-sm-10'}>
                <div className={'row'}>
                    <div className="col-12">
                        <strong>{game.title}</strong>
                    </div>
                    <div className={"col-12 text-break"}>
                        <span className={descriptionClassName}>{descriptionText}</span>
                    </div>
                </div>
            </div>
            <div className={'col-12 col-sm-2 d-flex pe-0 ps-0 ps-sm-1'}>
                <a className={'btn btn-dark d-flex flex-fill align-items-center ' + buttonDisabled}><FontAwesomeIcon className={'d-flex flex-fill'} icon={icon} /></a>
            </div>
        </div>
    );
}
