import Platform from "../../models/platform";
import PlatformListTile from "./platformListTile";

class platformListData {
    public platforms : Platform[]

    constructor(platforms : Platform[]) {
        this.platforms = platforms;
    }
}

export default function PlatformList(platformListData : Readonly<platformListData>) {
    return <>
        {platformListData.platforms.map(p => <div key={p.id} className={'m-1'}><PlatformListTile key={p.id} platform={p}/></div>)}
    </>
}
