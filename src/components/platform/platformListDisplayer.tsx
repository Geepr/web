import React, {useState} from "react";
import {usePlatformsFetch} from "../../clients/platformClient";
import PlatformList from "./platformList";
import {PageControl} from "../pagination/pageControl";
import PlatformFilter from "../../models/platformFilter";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons/faSquarePlus";

export default function PlatformListDisplayer() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState(new PlatformFilter());
    const {results: platforms, loading, paginationData} = usePlatformsFetch(page, filter);

    if (loading)
        return <div>Loading...</div>
    return <>
        <div className='row mb-4'>
            <div className='col-12 offset-sm-10 col-sm-2 d-flex'>
                <Link to='/platforms/create' title='Create new platrofm' className='btn btn-primary flex-fill'><FontAwesomeIcon icon={faSquarePlus}/></Link>
            </div>
        </div>
        <div className='row mb-4'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='name-filter'>Name</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input id='name-filter' placeholder='Platform name...' className='form-control' type='text' value={filter.name} onChange={event => setFilter(prevState => {let newState = prevState.clone(); newState.name = event.target.value; return newState;})}></input>
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
