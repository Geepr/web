import React from "react";
import GameReleaseBox from "./releases/gameReleaseBox";
import {useReleasesFetch} from "../../clients/releaseClient";
import {Game} from "../../models/game";

class props {
    public game : Game = undefined!;
    public page : number = undefined!;
    public loadMoreCallback : (requestedPage : number) => void = undefined!;
    public showLoadMore : boolean = undefined!;
}

export default function GameReleasesPage({game, page, loadMoreCallback, showLoadMore} : Readonly<props>) {
    const {results: releases, loading: releasesLoading, paginationData} = useReleasesFetch(game.id, page);

    if (releasesLoading)
        return <div className='col-8'>Loading...</div>
    if (releases === undefined)
        return <div className='col-8'>Failed to load releases...</div>
    return <>
        {releasesLoading && <span>Loading releases...</span>}
        {releases?.releases.map(release => <GameReleaseBox key={release.id} game={game} release={release}/>)}
        {showLoadMore && paginationData && paginationData?.TotalPages > page && <button className={'btn btn-outline-info'} onClick={() => loadMoreCallback(page + 1)}>Load more...</button>}
    </>
}
