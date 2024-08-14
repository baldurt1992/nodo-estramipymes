import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);
Chart.register(...registerables);

@Component({
  selector: 'app-chart-reloj-estrategico',
  standalone: true,
  templateUrl: './chart-reloj-estrategico.component.html',
  styleUrls: ['./chart-reloj-estrategico.component.css']
})
export class ChartRelojEstrategicoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {

    const font_size = 15;
    const aspectRatio = 1;
    // Axis limits
    const xMaxScale = 100;//100 * aspectRatio;
    const xMinScale = 0;
    const yMaxScale = 100;
    const yMinScale = 0;
    // Axis length and center
    const xlength = xMaxScale - xMinScale;
    const ylength = yMaxScale - yMinScale;
    const xCenter = xMaxScale - xlength / 2;
    const yCenter = yMaxScale - ylength / 2;
    // Internal chart limits
    const xMaxChart = xMaxScale - xlength * 0.2;
    const xMinChart = xMinScale + xlength * 0.2;
    const yMaxChart = yMaxScale - ylength * 0.2;
    const yMinChart = yMinScale + ylength * 0.2;

    // DATA
    const data = [
      { precio: 30, valor: 50 }, // 2/3 of axis
      { precio: (20+50+20)/3, valor: (50+50+80)/3 },
      { precio: 35.86, valor: 64.14 }, //C^2/2 = a^2
      { precio: (20+50+50)/3, valor: (50+80+80)/3 },
      { precio: 50, valor: 70 },
      { precio: 64.14, valor: 64.14 },
      { precio: 70, valor: 50 },
      { precio: 64.14, valor: 35.86 },
      { precio: 64.14, valor: 35.86 },
      { precio: 64.14, valor: 35.86 },
      { precio: 64.14, valor: 35.86 },
      { precio: 64.14, valor: 35.86 },
      { precio: 64.14, valor: 35.86 },
      { precio: 50, valor: 30 },
      { precio: 34.86, valor: 34.86 },
      // { precio: 70.00, valor: 50.00 },
      // { precio: 65.36, valor: 61.76 },
      // { precio: 55.63, valor: 69.02 },
      // { precio: 44.37, valor: 69.02 },
      // { precio: 34.64, valor: 61.76 },
      // { precio: 30.00, valor: 50.00 },
      // { precio: 34.64, valor: 38.24 },
      // { precio: 44.37, valor: 30.98 },
      // { precio: 55.63, valor: 30.98 },
      // { precio: 65.36, valor: 38.24 }


    ];


    const options: ChartConfiguration['options'] = {
      aspectRatio: aspectRatio,
      scales: {
        x: {
          min: xMinScale,
          max: xMaxScale,
          title: {
            display: true,
            text: 'Precio',
            font: {
              size: 25
            }
          },
          border: {
            color: 'rgb(0,0,0)',
            width: 3,
          }
        },
        y: {
          min: yMinScale,
          max: yMaxScale,
          title: {
            display: true,
            text: 'Valor percibido del producto',
            font: {
              size: 25
            }
          },
          border: {
            color: 'rgb(0,0,0)',
            width: 3,
          }
        }
      },
      elements: {
        point: {
          pointStyle: 'star',
          radius: 10,
          borderColor: 'rgb(255,192,0)',
          borderWidth: 5,
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Reloj Estratégico',
          font: {
            size: 30,
          },
          align: 'center',
        },
        legend: {
          display: false
        },
        annotation: {
          annotations: {
            lowPriceLine: {
              type: 'line',
              yMin: yCenter,
              yMax: yCenter,
              xMin: xMinChart,
              xMax: xMaxChart,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
              arrowHeads: {
                start: { display: true },
                end: { display: true },
                display: true
              },
            },
            lowPriceLabel: {
              type: 'label',
              xValue: xMinChart - xlength * 0.1,
              yValue: yCenter,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Bajo', 'precio'],
              font: {
                size: font_size
              }
            },

            differentiationLine: {
              type: 'line',
              yMin: yMinChart,
              yMax: yMaxChart,
              xMin: xCenter,
              xMax: xCenter,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
              arrowHeads: {
                start: { display: true },
                end: { display: true },
                display: true
              },
            },
            differentiationlabel: {
              type: 'label',
              xValue: xCenter,
              yValue: yMaxChart + ylength * 0.05,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Diferenciación'],
              font: {
                size: font_size
              }
            },

            lowPricelowProfitline: {
              type: 'line',
              yMin: yMinChart + ylength * 0.05,
              yMax: yMaxChart - ylength * 0.05,
              xMin: xMinChart + xlength * 0.05,
              xMax: xMaxChart - xlength * 0.05,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
              arrowHeads: {
                start: { display: true },
                end: { display: true },
                display: true
              },
            },
            focusedDifferentiationLabel: {
              type: 'label',
              xValue: xMaxChart + xlength * 0.075,
              yValue: yMaxChart - ylength * 0.025,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Diferenciación', 'segmentada'],
              font: {
                size: font_size
              }
            },
            lowPricelowProfitLabel: {
              type: 'label',
              xValue: xMinChart - xlength * 0.05,
              yValue: yMinChart,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Bajo precio /', 'Valor añadido'],
              font: {
                size: font_size
              }
            },

            hybridLine: {
              type: 'line',
              yMin: yMaxChart - ylength * 0.05,
              yMax: yMinChart + ylength * 0.05,
              xMin: xMinChart + xlength * 0.05,
              xMax: xMaxChart - xlength * 0.05,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
              arrowHeads: {
                start: { display: true },
                end: { display: true },
                display: true
              },
            },
            hybridLabel: {
              type: 'label',
              xValue: xMinChart,
              yValue: yMaxChart,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Híbrida'],
              font: {
                size: font_size
              }
            },

            elipse_center: {
              type: 'ellipse',
              yMin: yCenter - ylength * 0.025,
              yMax: yCenter + ylength * 0.025,
              xMin: xCenter - xlength * 0.025,
              xMax: xCenter + xlength * 0.025,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
            },
            elipse_bottom: {
              type: 'ellipse',
              yMin: yMinChart, //94000
              yMax: yCenter - ylength * 0.05,//99000,
              xMin: xCenter - (xCenter - xMinChart) / 2,//97500,
              xMax: xMaxScale,//109500,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 2,
              rotation: -45,
              backgroundColor: 'rgba(255, 99, 132, 0)'
            },
            label_ellipse: {
              type: 'label',
              xValue: xMaxChart + xlength * 0.05,
              yValue: yMinChart - ylength * 0.05,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Estrategias', 'destinadas al', 'fracaso'],
              font: {
                size: font_size
              }
            },
          }
        }
      }
    };

    const config: ChartConfiguration = {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Reloj Estratégico',
          data: data.map(row => ({ x: row.precio, y: row.valor }))
        }],
      },
      options,
    };

    new Chart(
      document.getElementById('reloj_estrategico') as HTMLCanvasElement,
      config
    );
  }
}
