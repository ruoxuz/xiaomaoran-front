import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";
import {Article} from "../../model/article";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticle()
      .subscribe(articles => this.articles = articles);
  }

}
