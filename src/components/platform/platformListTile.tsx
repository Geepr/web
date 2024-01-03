import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import Platform from "../../models/platform";
import './platformListTile.css';
import {Link} from "react-router-dom";

class platformListTileData {
    platform : Platform

    constructor(platform : Platform) {
        this.platform = platform;
    }
}

export default function PlatformListTile(params : Readonly<platformListTileData>) {
    const {platform} = params;

    return <div className='row tile-row'>
        <div className='col-4 col-sm-2 short-name-box d-flex flex-fill text-break'>
            <span className={'m-auto'}>{platform.shortName}</span>
        </div>
        <div className={'col-8 col-sm-7 d-flex flex-fill text-break'}>
            <span className={'m-auto'}>{platform.name}</span>
        </div>
        <div className={'col-12 col-sm-3 d-flex pe-0 ps-0 ps-sm-1'}>
            <Link className='btn btn-dark d-flex flex-fill align-items-center' title='Edit' to={`/platforms/edit/${platform.id}`}><FontAwesomeIcon className='d-flex flex-fill' icon={faPenToSquare}/></Link>
        </div>
    </div>
}
