import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {SignupInfo} from "../../model/signup-info";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePassword = true;

  form: any = {};
  signupInfo!: SignupInfo;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.signupInfo = new SignupInfo(
      this.form.name,
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
