import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Attribute} from "../model/attribute";
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

  getAllTags(): Observable<Attribute[]> {
    return this.http.get<Attribute[]>(this.getTagsUrl);
  }

  addTag(tag: Attribute): Observable<Attribute> {
    return this.http.post<Attribute>(this.addTagUrl, tag, this.httpOptions);
  }
}
