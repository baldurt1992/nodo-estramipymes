import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartRelojEstrategicoComponent } from '../chart-reloj-estrategico/chart-reloj-estrategico.component';
import { ChartCirculoDoradoComponent } from '../chart-circulo-dorado/chart-circulo-dorado.component';
import { ChartRadarEstrategicoComponent } from '../chart-radar-estrategico/chart-radar-estrategico.component';
import { ChartVrioComponent } from '../chart-vrio/chart-vrio.component';
import { ChartsNavComponent } from '../charts-nav/charts-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    ChartRelojEstrategicoComponent,
    ChartCirculoDoradoComponent,
    ChartRadarEstrategicoComponent,
    ChartVrioComponent,
    ChartsNavComponent,
    CommonModule,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export default class ChartsComponent {
  selectedChart: string = 'reloj-estrategico';

  onChartSelected(chartId: string) {
    this.selectedChart = chartId;
  }
}
