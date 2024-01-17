import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/userData"
  usersData:any;
  userData:any;
  constructor(private http:HttpClient) {
    http.get(this.url).subscribe((data)=>{
      console.log(data)
      this.usersData = data;
    })
    console.log(this.userData);
   }

  getValue(id:string){
    for(let user of this.usersData){
      if(id === user.id){
        return user;
      }
    }
    // return this.usersData.find((user: { id: string; }) => user.id === id);
  }

 store(userData: any): Observable<any> {
  const updateUrl = `${this.url}/${userData.id}`;
  //console.log(userData," in service")
    return this.http.put(updateUrl, userData);
  }

  addUser(userData:any){
    //const updateUrl = `${this.url}/${userData.id}`;
    //console.log(userData," in service")
    return this.http.post(this.url, userData);
  }

  getAllUser(){
    return this.usersData;
  }

  editUser(){
    this.http.get(this.url).subscribe((data)=>{
      console.log(data)
      this.usersData = data;
    })
  }
}
