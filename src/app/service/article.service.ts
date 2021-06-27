import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = 'http://localhost:8080/getArticles';

  constructor(private http: HttpClient) { }

  getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
  }
}
