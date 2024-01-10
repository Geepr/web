import {Game} from "./game";

export default class GameEditDto {
    public id : string;
    public title : string;
    public description : string | undefined;
    public archived : boolean;

    public constructor(game : Game) {
        this.id = game.id;
        this.title = game.title;
        this.description = game.description;
        this.archived = game.archived;
    }
}
