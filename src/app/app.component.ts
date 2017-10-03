import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor()
  {
    this.articles = [
      new Article('Angular 4', 'http://anuglar.io', 8),
      new Article('YouTube', 'http://youtube.com', 11),
      new Article('Ramzan', 'http://ranjamalee.com', 50)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding title: ${title.value} and Link: ${link.value}`);
    return false;
  }
}
