import {ObjectFilter} from "../clients/commonClient";

export default class GameFilter implements ObjectFilter{
     public title : string = "";

     getQueryString(): string {
          return `title=${this.title}`;
     }
}
