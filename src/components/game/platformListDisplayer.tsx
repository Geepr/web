import React, {useState} from "react";
import {usePlatformsFetch} from "../../clients/platformClient";
import PlatformList from "./platformList";
import {PageControl} from "../pagination/pageControl";

export default function PlatformListDisplayer() {
    const [page, setPage] = useState(1)
    const {platforms, loading, paginationData} = usePlatformsFetch(page);

    if (loading)
        return <div>Loading...</div>
    return <>
        <div className='row'>
            <div className='col'>
                <PlatformList platforms={platforms} />
                <PageControl Page={page} TotalPages={paginationData?.TotalPages ?? 0} SetPage={setPage}/>
            </div>
        </div>
    </>;
}
