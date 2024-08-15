import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-recovered-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-recovered-password.component.html',
  styleUrl: './form-recovered-password.component.css',
})
export class FormRecoveredPasswordComponent {
  email: string = '';
  emailSent: boolean = false;

  recoverPassword() {
    console.log('Recuperación de contraseña para:', this.email);

    setTimeout(() => {
      this.emailSent = true;
      this.email = '';
    }, 1000);
  }

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
}
