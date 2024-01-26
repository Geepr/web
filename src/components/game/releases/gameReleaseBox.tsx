import React from "react";
import GameRelease from "../../../models/gameRelease";
import {Game} from "../../../models/game";
import ReleasePlatformDisplayer from "./releasePlatformDisplayer";

class props {
    public game : Game = undefined!;
    public release : GameRelease = undefined!;
}

export default function GameReleaseBox({release, game} : Readonly<props>) {
    return <div className={'col-12 border border-info'}>
        <span className={'text-break p-2'}>{release.titleOverride ?? game.title}</span>
        <span>{release.platformIds.map((platformId) => (<ReleasePlatformDisplayer key={platformId} platformId={platformId}/>))}</span>
    </div>
}
