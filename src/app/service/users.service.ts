import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/userData"
  usersData:any;
  constructor(private http:HttpClient) {
    http.get(this.url).subscribe((data)=>{
      this.usersData = data;
    })
   }

  getValue(){
    return this.http.get(this.url);
  }

 store(userData: any): Observable<any> {
  const updateUrl = `${this.url}/${userData.id}`;
  //console.log(userData," in service")
    return this.http.put(updateUrl, userData);
  }

  getAllUser(){
    return this.usersData;
  }
}
