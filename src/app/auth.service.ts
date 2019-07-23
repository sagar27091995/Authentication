import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUserDetails(loginData){
    //Post the detailes to API server 
    console.log('loginvalues',loginData)
    this.http.post('http://localhost:5000/login', loginData)
    .subscribe(response =>{
      console.log(response);
      this.router.navigate(['./dashboard']);
    })
  }

  registerDetails(registerData: any){
    //Post the detailes to API server 
    console.log('registervalues',registerData)
    this.http.post('http://localhost:5000/register', registerData)
    .subscribe(response =>{
      console.log(response);
      this.router.navigate(['./login']);
    })
  }
}
