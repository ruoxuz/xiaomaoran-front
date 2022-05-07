import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { EditComponent } from './component/edit/edit.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { IndexComponent } from './component/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatCardModule} from "@angular/material/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MarkedPipe } from './marked.pipe';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { RegisterComponent } from './component/register/register.component';
import {MatMenuModule} from "@angular/material/menu";
import {AuthInterceptor} from "./helper/auth.interceptor";
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditComponent,
    ArticleListComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MarkedPipe,
    RegisterComponent,
    ArticleDetailComponent,
    AboutComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatIconModule,
        MatChipsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatMenuModule
    ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
