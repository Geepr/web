import React, {useState} from "react";
import {usePlatformsFetch} from "../../clients/platformClient";
import PlatformList from "./platformList";
import {PageControl} from "../pagination/pageControl";
import PlatformFilter from "../../models/platformFilter";

export default function PlatformListDisplayer() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState(new PlatformFilter());
    const {platforms, loading, paginationData} = usePlatformsFetch(page, filter);

    if (loading)
        return <div>Loading...</div>
    return <>
        <div className='row mb-4'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label form='name-filter'>Name</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input id='name-filter' placeholder='Platform name...' className='form-control' type='text' value={filter.name} onChange={event => setFilter(prevState => ({...prevState, name: event.target.value}))}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <PlatformList platforms={platforms} />
                <PageControl Page={page} TotalPages={paginationData?.TotalPages ?? 0} SetPage={setPage}/>
            </div>
        </div>
    </>;
}
