import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  @Input() id="0";
  userData: any;
  userForm: any;
  constructor(private formBuilder: FormBuilder,private userService: UsersService ) {
    //console.log(this.id," in constructor")
    
  }

  ngOnInit(): void {
    this.userData = this.userService.getValue(this.id);
    //console.log(this.id," in oninit")
    this.userForm = new FormGroup({
      name: new FormControl(this.userData.name),
      email: new FormControl(this.userData.email),
      phnNumber: new FormControl(this.userData.phnNumber),
      experiences: this.formBuilder.array(this.userData.experiences)
    });
  
  }

    get experiences() {
      return this.userForm?.controls.experiences as FormArray;
    }
  
    addExperience() {
      this.experiences.push(this.formBuilder.control(''));
    }

    submit(){
      console.log("value is: ",this.userForm.value);
      const updatedUserData = { id:this.userData.id , ...this.userForm.value};
      console.log(this.userData," ---------- ",updatedUserData)
      // console.log(this.userService.store(this.userForm.value));
      this.userService.store(updatedUserData).subscribe(response => {
        console.log('Data updated successfully:', response);
        this.userService.editUser();
      });
    }

    // addUser(){
    //   console.log(this.userForm.value)
    //   this.userService.addUser(this.userForm.value).subscribe(response => {
    //     console.log('User added successfully:', response);
    //   });
    // }

    remove(index:number){
      this.experiences.removeAt(index); 
    }
  
}
