import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartRelojEstrategicoComponent } from '../chart-reloj-estrategico/chart-reloj-estrategico.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartRelojEstrategicoComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export default class ChartsComponent {}
