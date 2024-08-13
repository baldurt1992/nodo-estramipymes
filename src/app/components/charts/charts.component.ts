import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartRelojEstrategicoComponent } from '../chart-reloj-estrategico/chart-reloj-estrategico.component';
import { ChartCirculoDoradoComponent } from '../chart-circulo-dorado/chart-circulo-dorado.component';
import { ChartRadarEstrategicoComponent } from "../chart-radar-estrategico/chart-radar-estrategico.component";
import { ChartVrioComponent } from '../chart-vrio/chart-vrio.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartRelojEstrategicoComponent,
    ChartCirculoDoradoComponent, 
    ChartRadarEstrategicoComponent,
    ChartVrioComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export default class ChartsComponent {}
