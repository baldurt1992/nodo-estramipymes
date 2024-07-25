import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-questionnaire',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome-questionnaire.component.html',
  styleUrl: './welcome-questionnaire.component.css',
})
export class WelcomeQuestionnaireComponent {}
