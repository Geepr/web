import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {usePlatformFetch} from "../../clients/platformClient";
import PlatformEditForm from "./platformEditForm";

export default function PlatformEditDisplayer() {
    const {platformId} = useParams();
    const {platform, loading} = usePlatformFetch(platformId!);
    const navigate = useNavigate();

    if (loading)
        return <div>Loading...</div>
    if (platform == null)
        return <div>Platform not found...</div>

    return <>
        <div className='row mb-3'>
            <div className='col-1'>
                <button className='btn btn-dark d-flex' onClick={() => navigate(-1)}><FontAwesomeIcon className='d-flex flex-fill' icon={faAngleLeft}/></button>
            </div>
        </div>
        <PlatformEditForm platform={platform} />
    </>
}
