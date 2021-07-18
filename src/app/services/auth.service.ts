import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = `${environment.apiUrl}/auth/signup`;
  private loginUrl = `${environment.apiUrl}/auth/login`;

  private userSubject?: BehaviorSubject<User | null>;
  private user?: Observable<User | null>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  signup(info: User): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, this.httpOptions);
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username, password }, this.httpOptions)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user))
        this.userSubject?.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject?.next(null);
    this.router.navigate(['/login'])
  }

  public get userValue(): User | null | undefined {
    return this.userSubject?.value;
  }
}
