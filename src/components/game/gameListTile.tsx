import React from "react";
import {Game} from "../../models/game";

import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons/faBoxArchive";

import './gameListTile.css';
import TruncatedText from "../utils/truncatedText";
import IconLink from "../utils/IconLink";

class GameListTileData {
    public game : Game = null!;
}

export function GameListTile(props : Readonly<GameListTileData>) {
    const game = props.game;
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
                        <span className={descriptionClassName}><TruncatedText Text={descriptionText} MaxLength={100}/></span>
                    </div>
                </div>
            </div>
            <div className={'col-12 col-sm-2 d-flex pe-0 ps-0 ps-sm-1 ' + buttonDisabled}>
                <IconLink to={game.id} icon={icon}/>
            </div>
        </div>
    );
}
