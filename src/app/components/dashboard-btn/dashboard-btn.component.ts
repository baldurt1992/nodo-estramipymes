import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-btn.component.html',
  styleUrl: './dashboard-btn.component.css',
})
export class DashboardBtnComponent {}
