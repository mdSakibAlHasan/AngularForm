import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [CommonModule, FormComponent, RouterModule],
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

  deleteUser(userId: string) {
    // Implement the logic to delete the user with the specified userId
    // For example, you might call a service method to perform the deletion
    this.userService.deleteUser(userId).subscribe(() => {
      // After successful deletion, update the usersData array
      this.usersData = this.usersData.filter((user: { id: string; }) => user.id !== userId);
    });
  }
 
  

}
