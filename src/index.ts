import { NewsService } from "./news-service.js";
import { NewsBlurb } from "./news-blurb.js";

const newsService = new NewsService();

window.addEventListener("load", () => {
    newsService.getAllZips().then((resp: JSON) => populateArticles(newsService.getArticles(resp)));
});

const populateArticles = (articles: NewsBlurb[]) => {
    articles.forEach(article => addArticleToList(article))
}

const addArticleToList = (article: NewsBlurb) => {
    const articleContainer = document.createElement("li");
    const articleHeadline = document.createElement("h2");
    const articleAuthor = document.createElement("h4");
    const articleBlurb = document.createElement("p");
    const articleHeadlineContent = document.createTextNode(article.headline);
    const articleAuthorContent = document.createTextNode(article.author);
    const articleBlurbContent = document.createTextNode(article.blurb);
    articleHeadline.appendChild(articleHeadlineContent);
    articleAuthor.appendChild(articleAuthorContent);
    articleBlurb.appendChild(articleBlurbContent);
    articleContainer.appendChild(articleHeadline).appendChild(articleAuthor).appendChild(articleBlurb);
    document.getElementById("news-feed").appendChild(articleContainer);
}