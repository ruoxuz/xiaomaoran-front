import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
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
