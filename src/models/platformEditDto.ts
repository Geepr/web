import Platform from "./platform";

export default class PlatformEditDto {
    public id : string
    public name : string
    public shortName : string

    constructor(platform : Platform) {
        this.id = platform.id;
        this.name = platform.name;
        this.shortName = platform.shortName;
    }
}
