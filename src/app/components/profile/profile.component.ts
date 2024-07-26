import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, UsersTableComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export default class ProfileComponent {}
