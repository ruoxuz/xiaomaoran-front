import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private getArticlesUrl = 'http://localhost:8080/getArticles';
  private getArticleUrl = 'http://localhost:8080/getArticle';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticlesUrl)
  }

  getArticle(uuid: string): Observable<Article> {
    const url = `${this.getArticleUrl}/${uuid}`;
    return this.http.get<Article>(url)
  }
}
