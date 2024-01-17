import { Component, OnInit } from '@angular/core';
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
export class FormComponent{
  userForm: any;
  usersData: any;

  constructor(private formBuilder: FormBuilder,private userService: UsersService ) {
    this.userService.getValue().subscribe((data) => {
      this.usersData = data;
      this.userForm = new FormGroup({
        name: new FormControl(this.usersData[0].name),
        email: new FormControl(this.usersData[0].email),
        phnNumber: new FormControl(this.usersData[0].phnNumber),
        experiences: this.formBuilder.array(this.usersData[0].experience)
      });
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
    }

    remove(index:number){
      this.experiences.removeAt(index); 
    }
  
}
