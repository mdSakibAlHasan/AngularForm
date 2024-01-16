import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder){}
    userForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      phnNumber: new FormControl(''),
      experiences: this.formBuilder.array([])
    })

    get f() { return this.userForm.controls; }

    // Convenience getter for easy access to 'experience' FormArray
    get experiences() {
      return this.f.experiences as FormArray;
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
