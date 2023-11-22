import {useGamesFetch} from "../../clients/gameClient";
import {GameList} from "./gameList";
import {useState} from "react";
import {PageControl} from "../pagination/pageControl";
import {Outlet} from "react-router-dom";
import GameFilter from "../../models/gameFilter";

export function GameListDisplayer() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState(new GameFilter());
    const {games, loading, paginationData} = useGamesFetch(page, filter);


    if (loading) {
        return <div>Loading...</div>
    }
    return <>
        <div className='row mb-4'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label form='title-filter'>Title</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input id='title-filter' className='form-control' type='text' value={filter.title} onChange={event => setFilter(prevState => ({...prevState, title: event.target.value}))}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <GameList games={games}/>
                <PageControl Page={page} TotalPages={paginationData?.TotalPages ?? 0} SetPage={setPage}/>
            </div>
            <Outlet/>
        </div>

    </>;
}
