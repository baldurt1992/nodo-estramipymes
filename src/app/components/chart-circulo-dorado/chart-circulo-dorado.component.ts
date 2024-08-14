import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-chart-circulo-dorado',
  standalone: true,
  templateUrl: './chart-circulo-dorado.component.html',
  styleUrls: ['./chart-circulo-dorado.component.css']
})
export class ChartCirculoDoradoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createChart();
    this.setTextContent();
  }

  createChart(): void {
    const data = [
      { precio: 50, valor: 50 }
    ];

    const circle_size = [5, 95, 5, 95];
    const diameter = (circle_size[1] - circle_size[0]);
    const k = 0.15;
    const percent_circle = diameter * k;
    const font_size = 15;

    const options: ChartConfiguration['options'] = {
      aspectRatio: 1,
      scales: {
        x: {
          min: 0,
          max: 100,
          display: false,
        },
        y: {
          min: 0,
          max: 100,
          display: false,
        }
      },
      plugins: {
        title: {
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
            what_circle: {
              type: 'ellipse',
              yMin: circle_size[0],
              yMax: circle_size[1],
              xMin: circle_size[2],
              xMax: circle_size[3],
              borderColor: '#ed7d31',
              backgroundColor: '#ed7d31',
              borderWidth: 2,
            },
            how_circle: {
              type: 'ellipse',
              yMin: circle_size[0] + percent_circle,
              yMax: circle_size[1] - percent_circle,
              xMin: circle_size[2] + percent_circle,
              xMax: circle_size[3] - percent_circle,
              borderColor: '#ffc000',
              backgroundColor: '#ffc000',
              borderWidth: 2,
            },
            why_circle: {
              type: 'ellipse',
              yMin: circle_size[0] + (percent_circle * 2),
              yMax: circle_size[1] - (percent_circle * 2),
              xMin: circle_size[2] + (percent_circle * 2),
              xMax: circle_size[3] - (percent_circle * 2),
              borderColor: '#4472c4',
              backgroundColor: '#4472c4',
              borderWidth: 2,
            },
            line_why: {
              type: 'line',
              yMin: 60,
              yMax: 85,
              xMin: 50,
              xMax: 100,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 1,
              arrowHeads: {
                end: { display: true },
              },
            },
            line_how: {
              type: 'line',
              yMin: 50,
              yMax: 50,
              xMin: 75,
              xMax: 100,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 1,
              arrowHeads: {
                end: { display: true },
              },
            },
            line_what: {
              type: 'line',
              yMin: 15,
              yMax: 10,
              xMin: 70,
              xMax: 100,
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 1,
              arrowHeads: {
                end: { display: true },
              },
            },
            label_why: {
              type: 'label',
              xValue: circle_size[2] + diameter / 2,
              yValue: circle_size[0] + diameter / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['¿Por qué?', '¿Para qué?'],
              font: {
                size: font_size
              }
            },
            label_how: {
              type: 'label',
              xValue: circle_size[2] + diameter / 2,
              yValue: circle_size[0] + diameter * k * 1.5,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['¿Cómo?'],
              font: {
                size: font_size
              }
            },
            label_what: {
              type: 'label',
              xValue: circle_size[2] + diameter / 2,
              yValue: circle_size[0] + diameter * k * 0.5,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['¿Qué?'],
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
        datasets: [
          {
            label: 'Círculo Dorado',
            data: data.map(row => ({ x: row.precio, y: row.valor }))
          },
        ]
      },
      options,
    };

    new Chart(
      document.getElementById('circulo_dorado') as HTMLCanvasElement,
      config
    );
  }

setTextContent(): void {
  // Text Circulo Dorado - Why
  const p_why: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum nisi at ipsum mattis, at gravida dui ornare. Aliquam odio ex, ullamcorper eu arcu sed, tincidunt viverra lacus. Etiam posuere elit non accumsan egestas. In sodales cursus dignissim. Curabitur sed consequat mi. Nullam eleifend justo nec lorem ultricies, at feugiat nunc dignissim. Vestibulum quis bibendum massa. Praesent nec euismod turpis, id laoreet urna. Aenean ullamcorper neque et lobortis fringilla.";
  (document.getElementById('p_why') as HTMLElement).textContent = p_why;

  // Text Circulo Dorado - How
  const p_how: string = "Proin pharetra sem ligula, vitae tempus ex pharetra quis. Aliquam erat volutpat. Aliquam sapien sapien, interdum id erat eu, vestibulum feugiat purus. Donec euismod tempor luctus. In hac habitasse platea dictumst. Pellentesque nulla nibh, rhoncus ac dignissim eu, maximus interdum felis. Donec tortor ex, dapibus sit amet metus et, lobortis porta nisl.";
  (document.getElementById('p_how') as HTMLElement).textContent = p_how;

  // Text Circulo Dorado - What
  const p_what: string = "Sed nec nulla non nunc egestas ultrices. Pellentesque purus erat, mattis vitae semper et, dapibus sit amet nisl. In mollis lorem leo. Pellentesque luctus maximus purus, non viverra tortor molestie sit amet. Etiam eu nulla a diam mollis sagittis. Cras fringilla ut mauris vitae hendrerit. Pellentesque ac turpis velit.";
  (document.getElementById('p_what') as HTMLElement).textContent = p_what;
}
}
