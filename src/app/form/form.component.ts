import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { DataService } from '../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  userData: any;
  userForm: any;
  id:string="0";
  title:string="User details";
  constructor(private formBuilder: FormBuilder,private userService: UsersService, private route:ActivatedRoute, private location:Location ) {
    this.id = this.route.snapshot.paramMap.get('id') || "0";
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phnNumber: new FormControl(),
      experiences: this.formBuilder.array([])
    });  
  }

  ngOnInit(): void {
    this.userData = this.userService.getValue(this.id);
    this.userForm = new FormGroup({
      name: new FormControl(this.userData?.name),
      email: new FormControl(this.userData?.email),
      phnNumber: new FormControl(this.userData?.phnNumber),
      experiences: this.formBuilder.array(this.userData?.experiences)
    });  
  }

    get experiences() {
      return this.userForm?.controls.experiences as FormArray;
    }
  
    addExperience() {
      this.experiences.push(this.formBuilder.control(''));
    }

    submit(){
      if(this.id==="0"){
        this.userService.addUser(this.userForm.value).subscribe(response => {
          console.log('User added successfully:', response);
          this.userService.editUser();
        });
      }else{
        const updatedUserData = { id:this.userData.id , ...this.userForm.value};
        this.userService.store(updatedUserData).subscribe(response => {
          console.log('Data updated successfully:', response);
          this.userService.editUser();
        });
      }    
    }

    remove(index:number){
      this.experiences.removeAt(index); 
    }

    goBack(){
      this.location.back();
    }  
}
