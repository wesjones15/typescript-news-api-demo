export class NewsBlurb {
    headline:   string;
    author:     string;
    blurb:      string;
    timestamp:  string;
    origin:     string;

    constructor(headline: string, author: string, blurb: string, timestamp: string, origin: string) {
        this.headline   = headline;
        this.author     = author;
        this.blurb      = blurb;
        this.timestamp  = timestamp;
        this.origin     = origin;
    }

    displayArticle ():string {
        return (this.headline + " " + this.author + " " + this.blurb
        + " " + this.timestamp + "\n" + this.origin);
    }

}