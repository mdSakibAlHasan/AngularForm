import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
[x: string]: any;
  usersData:any;
  userID:string="0";
  constructor(private userService:UsersService){
    this.usersData =  userService.getAllUser();
      
  }

  editUser(id:string){
    this.userID = id;
    console.log(this.userID," in ")
  }

  deleteUser(id:string){

  }
 
  

}
