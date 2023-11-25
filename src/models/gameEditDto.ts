import {Game} from "./game";

export default class GameEditDto {
    public title : string;
    public description : string | undefined;
    public archived : boolean;

    public constructor(game : Game) {
        this.title = game.title;
        this.description = game.description;
        this.archived = game.archived;
    }
}
