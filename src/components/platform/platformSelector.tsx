import React from "react";
import Platform from "../../models/platform";
import AsyncSelect from "react-select/async";
import PlatformFilter from "../../models/platformFilter";
import {fetchPlatforms} from "../../clients/platformClient";

class props {
    public initialValue? : Platform | undefined;
    public className? : string | undefined;
    public multiple? : boolean = undefined!;
}

export default function PlatformSelector({initialValue, className = '', multiple = false} : Readonly<props>) {
    const initialData = initialValue !== undefined ? {label: initialValue.id, value: initialValue.name} : undefined;

    const loadOptions = async (inputValue : string) => {
        const platforms = await fetchPlatforms(1, new PlatformFilter(inputValue));
        return platforms.results.platforms.map((p) => ({label: p.name, value: p.id}));
    }

    return <AsyncSelect className={className} cacheOptions placeholder={'Select platform...'} defaultValue={initialData} isMulti={multiple} loadOptions={loadOptions}/>
}
