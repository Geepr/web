export default class GameRelease {
    public id : string;
    public titleOverride : string | undefined;
    public platformIds : string[];

    constructor(id : string, titleOverride : string | undefined, platformIds : string[]) {
        this.id = id;
        this.titleOverride = titleOverride;
        this.platformIds = platformIds;
    }
}
