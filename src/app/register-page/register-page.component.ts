import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const formData = form.value
    // console.log(formData.Username);

  }
}
