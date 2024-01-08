import {ObjectFilter} from "../clients/commonClient";

export default class PlatformFilter implements ObjectFilter{
    public name : string = ""

    getQueryString(): string {
        return `name=${this.name}`;
    }
}
