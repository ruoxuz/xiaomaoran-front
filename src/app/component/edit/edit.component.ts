import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";
import {Article} from "../../model/article";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Attribute} from "../../model/attribute";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {TagService} from "../../service/tag.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title: string = '';
  content: string = '';
  personal: boolean = false;
  tags: Attribute[] = [];

  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  allTags: string[] = [];

  constructor(
    private articleService: ArticleService,
    private tagService: TagService
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string) => tag ? this._filter(tag) : this.allTags.slice())
    )
  }

  ngOnInit(): void {
    this.getAllTags();
  }

  saveArticle(): void {
    let title = this.title;
    let content = this.content;
    let personal = this.personal;
    let tags = this.tags;
    this.articleService.saveArticle({title, content, personal, tags} as Article)
      .subscribe(article => {
        console.log('save article:' + article)
      });
  }

  getAllTags(): void {
    this.tagService.getAllTags().subscribe(tags => {
      tags.forEach(tag => this.allTags.push(tag.name));
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && !this.allTags.includes(value)) {
      this.tagService.addTag({name: value}).subscribe(tag => {
        console.log('save tag:' + tag)
      });
      this.tags.push({name: value});
    }
    event.chipInput!.clear();
  }

  removeTag(tag: Attribute): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
}
