export class Game {
    public id : string;
    public title : string;
    public description : string | undefined;
    public archived : boolean;

    public constructor(id : string, title : string, description : string | undefined = undefined, archived : boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.archived = archived;
    }
}
