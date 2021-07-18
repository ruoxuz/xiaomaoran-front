import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList(): void {
    this.articleService.getArticleList()
      .subscribe(articles => this.articles = articles);
  }

}
