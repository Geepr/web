export class Game {
    public id : string;
    public title : string;
    public description : string | null;
    public archived : boolean;

    public constructor(id : string, title : string, description : string | null = null, archived : boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.archived = archived;
    }
}
