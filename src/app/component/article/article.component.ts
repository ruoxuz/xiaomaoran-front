import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/article";
import {ArticleService} from "../../service/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = new class implements Article {
    content: string = '';
    createTime: string = '';
    personal: boolean = false;
    title: string = '';
    updateTime: string = '';
    uuid: string = '';
  };

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
