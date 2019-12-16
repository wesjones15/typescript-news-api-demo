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
    const articleSubContainer = document.createElement("div");
    const articleContainer = document.createElement("div");
    const articleHeadline = document.createElement("h1");
    const articleAuthor = document.createElement("h3");
    const articleBlurb = document.createElement("p");
    const articleLink = document.createElement("a");
    const articleImage = document.createElement("img");
    const imageContainer = document.createElement("div");

    const articleHeadlineContent = document.createTextNode(article.headline);
    const articleAuthorContent = document.createTextNode(article.author);
    const articleBlurbContent = document.createTextNode(article.blurb);

    articleContainer.setAttribute("id", "_container");

    // articleSubContainer.setAttribute("class", "col-6");

    articleHeadline.setAttribute("id", "_headline");
    articleAuthor.setAttribute("id", "_author");
    articleBlurb.setAttribute("id", "_body");
    articleLink.setAttribute("href", article.origin);
    articleImage.setAttribute("src", article.imageLink);
    articleImage.setAttribute("id", "_image");
    // articleImage.setAttribute("class", "col-6")
    articleSubContainer.setAttribute("id", "_subcontainer");
    imageContainer.setAttribute("id", "_image-container");


    articleHeadline.appendChild(articleHeadlineContent);
    articleAuthor.appendChild(articleAuthorContent);
    articleBlurb.appendChild(articleBlurbContent);
    articleSubContainer.appendChild(articleLink).appendChild(articleHeadline);
    articleSubContainer.appendChild(articleAuthor)
    articleSubContainer.appendChild(articleBlurb);
    imageContainer.appendChild(articleImage);
    articleContainer.appendChild(imageContainer);
    articleContainer.appendChild(articleSubContainer);
    document.getElementById("news-feed").appendChild(articleContainer);
}