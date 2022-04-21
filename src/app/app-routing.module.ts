import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./component/index/index.component";
import {LoginComponent} from "./component/login/login.component";
import {ArticleComponent} from "./component/article/article.component";
import {EditComponent} from "./component/edit/edit.component";
import {RegisterComponent} from "./component/register/register.component";
import {AuthGuard} from "./helper/auth.guard";
import {ArticleDetailComponent} from "./component/article-detail/article-detail.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/detail', component: ArticleDetailComponent},
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
