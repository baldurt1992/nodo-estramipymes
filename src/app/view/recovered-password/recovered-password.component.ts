import { Component } from '@angular/core';
import { FormRecoveredPasswordComponent } from '../../components/form-recovered-password/form-recovered-password.component';

@Component({
  selector: 'app-recovered-password',
  standalone: true,
  imports: [FormRecoveredPasswordComponent],
  templateUrl: './recovered-password.component.html',
  styleUrl: './recovered-password.component.css',
})
export class RecoveredPasswordComponent {}
