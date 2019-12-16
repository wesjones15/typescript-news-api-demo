import { NewsBlurb } from './news-blurb.js';
import { API_KEY } from '../secrets.js'
export class NewsService {

    getAllZips = async ():Promise<JSON> => {
        const url:string = 'https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=' + API_KEY;
        const req:Request = new Request(url);
        return new Promise((resolve) => {
            fetch(req)
              .then(response => response.json())
              .then(body => {
                resolve(body);
              });
          });
    }

    getArticles = (response: JSON): NewsBlurb[] => {
      let articleList:NewsBlurb[] = [];
      
      response["articles"].forEach(article => {
          const newsBlurb:NewsBlurb = new NewsBlurb(
            article["title"],
            article["author"],
            article["description"],
            article["publishedAt"],
            article["url"],
            article["urlToImage"]
          );
          articleList.push(newsBlurb);
      });
      return articleList;
    }

}