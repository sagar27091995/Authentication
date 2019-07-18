import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails(username, password){
    //Post the detailes to API server and return if it correct 
    console.log('ssss',username, password)
  }
}
