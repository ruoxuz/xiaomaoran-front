import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePassword = true;

  form: any = {};
  signupInfo!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.signupInfo = new User(
      this.form.username,
      this.form.email,
      this.form.password
    )
    this.authService.signup(this.signupInfo).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
