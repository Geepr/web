import {ObjectFilter} from "../clients/commonClient";

export default class GameFilter implements ObjectFilter{
     public title : string = "";

     constructor(title = "") {
          this.title = title;
     }

     getQueryString(): string {
          return `title=${this.title}`;
     }

     clone() : GameFilter {
          return new GameFilter(this.title);
     }
}
