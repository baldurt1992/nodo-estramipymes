import { QuestionnaireService } from './../../services/questionnaire.service';
import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { UserFormResponses } from '../../models/response.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-summary',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './form-sumary.component.html',
  styleUrls: ['./form-sumary.component.css'],
})
export class FormSummaryComponent implements OnInit {
  filterText: string = '';
  selectedUser: UserFormResponses | null = null;
  users: UserFormResponses[] = [];
  groupedResponses: { [key: string]: any[] } = {};

  constructor(
    private responseService: ResponseService,
    private questionnaireService: QuestionnaireService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.responseService.getAllUsers().subscribe((users) => {
      this.users = users.filter((user) => user.formCompleted);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filterText = filterValue;

    if (!this.filterText) {
      this.selectedUser = null;
    }
  }

  onUserSelect(user: UserFormResponses) {
    this.selectedUser = user;
    this.groupResponsesBySection();
    this.filterText = '';
  }

  groupResponsesBySection() {
    const sections = this.questionnaireService.getSections();
    this.groupedResponses = sections.reduce(
      (acc: { [key: string]: any[] }, section: string) => {
        acc[section] =
          this.selectedUser?.responses.filter((response) =>
            this.questionnaireService
              .getQuestions()
              .some(
                (q) => q.section === section && q.label === response.question
              )
          ) || [];
        return acc;
      },
      {}
    );
  }

  get filteredUsers(): UserFormResponses[] {
    if (!this.filterText) {
      return [];
    }

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText)
    );
  }
}
