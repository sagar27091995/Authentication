import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const registerData = form.value
    this.Auth.registerDetails(registerData);
  }
}
