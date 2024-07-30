import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.registerForm = this.fb.group({
      typePerson: ['' , Validators.required],
      fullName: ['' , Validators.required],
      factory: ['' , Validators.required],
      businessName: [''],
      email: ['' ,[Validators.required, Validators.email]],
      password: ['' , Validators.required],
      confirmPassword: ['' , Validators.required],
    });
  }


  onSubmit(){
    if (this.registerForm.valid) {
     this.router.navigate (["/login"]) 
     console.log ("enviado")
    }  else {
      console.log("error")
    }
  } 
}

