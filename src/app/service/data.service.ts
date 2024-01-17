import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // httpClient = inject(HttpClient);
  // constructor(private httpClient:HttpClient){}

  users(){

  }
  userData = [
    {name: "sakib", email:"sakib@gmail.com", phnNumber:"01707", experience:["C","java"]}

  ]

  getData(): any{
    return this.userData[0];
  }
}
