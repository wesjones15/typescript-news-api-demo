export class NewsBlurb {
    headline:   string;
    author:     string;
    blurb:      string;
    timestamp:  string;
    origin:     string;
    imageLink:  string;

    constructor(headline: string, author: string, blurb: string, timestamp: string, origin: string, imageLink: string) {
        this.headline   = headline;
        this.author     = author;
        this.blurb      = blurb.substring(0,200);
        this.timestamp  = timestamp;
        this.origin     = origin;
        this.imageLink  = imageLink;
    }

    displayArticle ():string {
        return (this.headline + " " + this.author + " " + this.blurb
        + " " + this.timestamp + "\n" + this.origin);
    }

}