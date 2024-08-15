import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-chart-radar-estrategico',
  standalone: true,
  templateUrl: './chart-radar-estrategico.component.html',
  styleUrls: ['./chart-radar-estrategico.component.css'],
})
export class ChartRadarEstrategicoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = {
      labels: [
        'Conocimiento del cliente',
        ['Conocimiento', 'del negocio'],
        ['Coherencia del', 'modelo de negocio'],
        ['Alineación en la', 'comunicación interna'],
        ['Salud', 'financiera'],
      ],
      datasets: [
        {
          label: 'Ramiro Wayne Roonie',
          data: [1, 2, 4, 2, 2],
          fill: true,
          backgroundColor: '#01036920',
          borderColor: '#010369',
          pointBackgroundColor: '#010369',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#010369',
        },
      ],
    };

    const config: ChartConfiguration<'radar'> = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            pointLabels: {
              font: {
                size: 14,
              },
            },
            suggestedMin: 0,
            suggestedMax: 4,
          },
        },
      },
    };

    new Chart(
      document.getElementById('radar_estrategico') as HTMLCanvasElement,
      config
    );
  }
}
