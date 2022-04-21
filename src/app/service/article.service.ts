import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private getArticlesUrl = 'http://localhost:8080/getArticles';
  private getArticleUrl = 'http://localhost:8080/getArticle';
  private saveArticleUrl = 'http://localhost:8080/saveArticle';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticlesUrl)
  }

  getArticle(uuid: string): Observable<Article> {
    const url = `${this.getArticleUrl}/${uuid}`;
    return this.http.get<Article>(url)
  }

  saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.saveArticleUrl, article, this.httpOptions)
  }
}
