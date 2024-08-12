import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartRelojEstrategicoComponent } from '../chart-reloj-estrategico/chart-reloj-estrategico.component';
import { ChartCirculoDoradoComponent } from '../chart-circulo-dorado/chart-circulo-dorado.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartRelojEstrategicoComponent,
    ChartCirculoDoradoComponent
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export default class ChartsComponent {}
