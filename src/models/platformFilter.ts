export default class PlatformFilter{
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
