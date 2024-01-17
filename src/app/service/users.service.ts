import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/userData"
  userData:any;
  constructor(private http:HttpClient) { }
 
  getData(){
    this.http.get(this.url).subscribe((data)=>{
      this.userData = data;
      console.log("ser: ",data);
    })
    return  this.userData;
  }

  getValue(){
    return this.http.get(this.url);
  }
}
