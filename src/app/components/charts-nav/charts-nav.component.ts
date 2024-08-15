import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-charts-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charts-nav.component.html',
  styleUrl: './charts-nav.component.css',
})
export class ChartsNavComponent {
  charts = [
    { name: 'Reloj Estratégico', id: 'reloj-estrategico' },
    { name: 'Radar Estratégico', id: 'radar-estrategico' },
    { name: 'VRIO', id: 'vrio' },
    { name: 'Círculo Dorado', id: 'circulo-dorado' },
  ];

  selectedChartId: string | null = null;
  @Output() chartSelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.selectedChartId = this.charts[0].id;
    this.chartSelected.emit(this.selectedChartId);
  }

  selectChart(chartId: string) {
    this.selectedChartId = chartId;
    this.chartSelected.emit(chartId);
  }
}
