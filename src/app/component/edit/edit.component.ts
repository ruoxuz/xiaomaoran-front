import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";
import {Article} from "../../model/article";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title: string = '';
  content: string = '';
  personal: boolean = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  saveArticle(): void {
    let title = this.title;
    let content = this.content;
    let personal = this.personal;
    this.articleService.saveArticle({title, content, personal} as Article)
      .subscribe(article => {
        console.log('save article:' + article)
      });
  }

}
