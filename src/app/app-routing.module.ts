import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./component/index/index.component";
import {LoginComponent} from "./component/login/login.component";
import {ArticleComponent} from "./component/article/article.component";
import {EditComponent} from "./component/edit/edit.component";
import {RegisterComponent} from "./component/register/register.component";
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/:uuid', component: ArticleComponent },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
