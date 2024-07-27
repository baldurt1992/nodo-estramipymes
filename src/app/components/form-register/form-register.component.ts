import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      typePerson: ["" , Validators.required],
      fullName: ["" , Validators.required],
      factory: ["" , Validators.required],
      businessName: [""],
      email: ["" ,[Validators.required, Validators.email]],
      password: ["" , Validators.required],
      comfirmPassword: ["" , Validators.required],
    });
  }


  onSubmit(){
    if (this.registerForm.valid) {
      
    }
  }
}

