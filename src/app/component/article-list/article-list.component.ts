import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/article";
import {ArticleService} from "../../service/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid')!;
    this.articleService.getArticle(uuid)
      .subscribe(article => this.article = article);
  }

}
