import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const loginData = form.value;

    this.Auth.loginUserDetails(loginData)
  }
}
