import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
   birth:Date = new Date();
   myname:String = "susndar";
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/bob/i) ] ],
    lastName: ['']
  });
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  get name() { return this.profileForm.controls['firstName'] }

}
