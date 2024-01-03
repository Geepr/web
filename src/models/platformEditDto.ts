import Platform from "./platform";

export default class PlatformEditDto {
    public name : string
    public shortName : string

    constructor(platform : Platform) {
        this.name = platform.name;
        this.shortName = platform.shortName;
    }
}
