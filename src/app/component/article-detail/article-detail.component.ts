import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../model/article";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticleDetail();
  }

  getArticleDetail(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid')!;
    this.articleService.getArticle(uuid)
      .subscribe(article => this.article = article);
  }

}
