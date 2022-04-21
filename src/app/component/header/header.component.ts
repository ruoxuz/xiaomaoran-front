import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    const user = this.authService.userValue;
    if (user) {
      return true;
    }
    return false
  }

  logout() {
    this.authService.logout();
  }

}
