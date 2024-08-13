import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const user = this.userService.getUser(this.email, this.password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/admindashboard']);
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos';
    }
  }

  clearError() {
    this.errorMessage = '';
  }
}
