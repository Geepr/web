export default class GameFilter {
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
