import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  userData:any;
  userForm:any;
  constructor(private formBuilder: FormBuilder, private dataService:DataService){
    this.userData = this.dataService.getData();
    this.userForm = new FormGroup({
      name : new FormControl(this.userData.name),
      email : new FormControl(this.userData.email),
      phnNumber: new FormControl(this.userData.phnNumber),
      experiences: this.formBuilder.array(this.userData.experience)
    })
  
  }

  
    ngOnInit(): void {
      console.log("oninit")
      // this.userData = this.dataService.getData();
      // this.userForm.controls.name = this.userData[0].name;
    }

    get experiences() {
      return this.userForm.controls.experiences as FormArray;
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
