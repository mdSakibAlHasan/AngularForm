import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
  usersData:any;
  constructor(private userService:UsersService){
    this.usersData =  userService.getAllUser();
      
  }

  editUser(id:string){

  }

  deleteUser(id:string){

  }
 
  

}
