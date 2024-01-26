import React from "react";
import {usePlatformFetch} from "../../../clients/platformClient";

class props {
    public platformId : string = undefined!;
}

export default function ReleasePlatformDisplayer({platformId} : Readonly<props>) {
    const {loading, result} = usePlatformFetch(platformId);

    if (loading)
        return <>...</>
    if (result === undefined)
        return <></>
    return <span>({result.shortName})</span>
}
