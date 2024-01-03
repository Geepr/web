export default class Platform {
    public id : string
    public name : string
    public shortName : string

    constructor(id : string, name : string, shortName : string) {
        this.id = id;
        this.name = name;
        this.shortName = shortName;
    }
}
