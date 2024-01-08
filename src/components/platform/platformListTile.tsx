import React from "react";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import Platform from "../../models/platform";
import './platformListTile.css';
import IconLink from "../utils/IconLink";

class platformListTileData {
    platform : Platform

    constructor(platform : Platform) {
        this.platform = platform;
    }
}

export default function PlatformListTile(props : Readonly<platformListTileData>) {
    const {platform} = props;

    return <div className='row tile-row'>
        <div className='col-4 col-sm-2 short-name-box d-flex flex-fill text-break'>
            <span className={'m-auto'}>{platform.shortName}</span>
        </div>
        <div className={'col-8 col-sm-7 d-flex flex-fill text-break'}>
            <span className={'m-auto'}>{platform.name}</span>
        </div>
        <div className={'col-12 col-sm-3 d-flex pe-0 ps-0 ps-sm-1'}>
            <IconLink to={`/platforms/edit/${platform.id}`} icon={faPenToSquare} title={'Edit'}/>
        </div>
    </div>
}
