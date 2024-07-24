import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
