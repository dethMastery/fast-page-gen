// import "dotenv/config";

// export const host = process.env.HOST ?? "./dist";
// export const homepage = process.env.HOMEPAGE ?? "https://suphakit.net";
// export const author = process.env.AUTHOR ?? "Suphakit P.";

export class ConfigClass {
  public host: string;
  public homepage: string;
  public author: string;

  constructor() {
    this.host = "./dist";
    this.homepage = "https://suphakit.net";
    this.author = "Suphakit P.";
  }

  public setHost(host: string) {
    this.host = host;
    localStorage.setItem("host", host);
  }

  public setHomepage(homepage: string) {
    this.homepage = homepage;
    localStorage.setItem("homepage", homepage);
  }

  public setAuthor(author: string) {
    this.author = author;
    localStorage.setItem("author", author);
  }
}
