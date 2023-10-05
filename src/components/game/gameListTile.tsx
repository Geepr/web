import React from "react";
import {Game} from "../../models/game";
import './gameListTile.css';

export function GameListTile(game : Game) {
    const descriptionText =
        game.archived ? 'This game has been archived' :
            game.description ? game.description : 'This game has no description...';
    const descriptionClassName = (!game.archived && !game.description) ? 'description-disabled' : '';

    return (
        <div className={"row" + (game.archived ? " game-disabled" : "") + " border"}>
            <div className={'col-12 ' + (game.archived ? 'col-sm-12' : 'col-sm-10')}>
                <div className={'row'}>
                    <div className="col-12">
                        <strong>{game.title}</strong>
                    </div>
                    <div className={"col-12 text-break"}>
                        <span className={descriptionClassName}>{descriptionText}</span>
                    </div>
                </div>
            </div>
            {!game.archived &&
                <div className={'col-2'}>
                    penis
                </div>
            }
        </div>
    );
}
