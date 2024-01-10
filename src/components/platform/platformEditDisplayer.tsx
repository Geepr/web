import React from "react";
import {useParams} from "react-router-dom";
import {usePlatformFetch} from "../../clients/platformClient";
import PlatformEditForm from "./platformEditForm";

export default function PlatformEditDisplayer() {
    const {platformId} = useParams();
    const {result: platform, loading} = usePlatformFetch(platformId!);

    if (loading)
        return <div>Loading...</div>
    if (platform === undefined)
        return <div>Platform not found...</div>

    return <>
        <PlatformEditForm platform={platform} />
    </>
}
