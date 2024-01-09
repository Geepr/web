import {ObjectFilter} from "../clients/commonClient";

export default class PlatformFilter implements ObjectFilter{
    public name : string = ""

    constructor(name = "") {
        this.name = name;
    }

    getQueryString(): string {
        return `name=${this.name}`;
    }

    clone(): PlatformFilter {
        return new PlatformFilter(this.name);
    }
}
