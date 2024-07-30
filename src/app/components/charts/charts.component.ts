import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export default class ChartsComponent {}
