import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  form: FormGroup;
  questions: Question[];
  currentQuestionIndex: number = 0;
  maxLength: number = 1500;
  sections: string[];

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.questions = this.questionnaireService.getQuestions();
    this.sections = [...new Set(this.questions.map((q) => q.section))];
    this.form = this.fb.group({});
    this.questions.forEach((question) => {
      this.form.addControl(
        question.controlName,
        this.fb.control('', [
          Validators.required,
          Validators.maxLength(this.maxLength),
        ])
      );
    });
  }

  ngOnInit(): void {}

  get remainingCharacters(): number {
    const controlValue =
      this.form.get(this.questions[this.currentQuestionIndex].controlName)
        ?.value || '';
    return this.maxLength - controlValue.length;
  }

  nextQuestion() {
    if (
      this.currentQuestionIndex < this.questions.length - 1 &&
      this.isCurrentQuestionAnswered()
    ) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  isCurrentQuestionAnswered(): boolean {
    const control = this.form.get(
      this.questions[this.currentQuestionIndex].controlName
    );
    return control?.valid || false;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  get currentSection(): string {
    return this.questions[this.currentQuestionIndex].section;
  }

  goToSection(section: string) {
    const sectionIndex = this.questions.findIndex((q) => q.section === section);
    if (sectionIndex !== -1) {
      this.currentQuestionIndex = sectionIndex;
    }
  }
}
