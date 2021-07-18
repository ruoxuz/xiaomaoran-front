import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tag} from "../models/tag";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private getTagsUrl = 'http://localhost:8080/getAllTags';
  private addTagUrl = 'http://localhost:8080/addTag';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.getTagsUrl);
  }

  addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.addTagUrl, tag, this.httpOptions);
  }
}
