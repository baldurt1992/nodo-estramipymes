import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-chart-circulo-dorado',
  standalone: true,
  templateUrl: './chart-circulo-dorado.component.html',
  styleUrls: ['./chart-circulo-dorado.component.css'],
})
export class ChartCirculoDoradoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
    this.setTextContent();
  }

  createChart(): void {
    const data = [{ precio: 50, valor: 50 }];

    const circle_size = [5, 95, 5, 95];
    const diameter = circle_size[1] - circle_size[0];
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
        },
      },
      plugins: {
        title: {
          font: {
            size: 30,
          },
          align: 'center',
        },
        legend: {
          display: false,
        },
        annotation: {
          annotations: {
            what_circle: {
              type: 'ellipse',
              yMin: circle_size[0],
              yMax: circle_size[1],
              xMin: circle_size[2],
              xMax: circle_size[3],
              borderColor: '#FD673E',
              backgroundColor: '#FD673E',
              borderWidth: 2,
            },
            how_circle: {
              type: 'ellipse',
              yMin: circle_size[0] + percent_circle,
              yMax: circle_size[1] - percent_circle,
              xMin: circle_size[2] + percent_circle,
              xMax: circle_size[3] - percent_circle,
              borderColor: '#F7B224',
              backgroundColor: '#F7B224',
              borderWidth: 2,
            },
            why_circle: {
              type: 'ellipse',
              yMin: circle_size[0] + percent_circle * 2,
              yMax: circle_size[1] - percent_circle * 2,
              xMin: circle_size[2] + percent_circle * 2,
              xMax: circle_size[3] - percent_circle * 2,
              borderColor: '#085FA0',
              backgroundColor: '#085FA0',
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
                size: font_size,
              },
              color: '#fff',
            },
            label_how: {
              type: 'label',
              xValue: circle_size[2] + diameter / 2,
              yValue: circle_size[0] + diameter * k * 1.5,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['¿Cómo?'],
              font: {
                size: font_size,
              },
            },
            label_what: {
              type: 'label',
              xValue: circle_size[2] + diameter / 2,
              yValue: circle_size[0] + diameter * k * 0.5,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['¿Qué?'],
              font: {
                size: font_size,
              },
            },
          },
        },
      },
    };

    const config: ChartConfiguration = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Círculo Dorado',
            data: data.map((row) => ({ x: row.precio, y: row.valor })),
          },
        ],
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
    const p_why: string =
      'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.';
    (document.getElementById('p_why') as HTMLElement).textContent = p_why;

    // Text Circulo Dorado - How
    const p_how: string =
      'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.';
    (document.getElementById('p_how') as HTMLElement).textContent = p_how;

    // Text Circulo Dorado - What
    const p_what: string =
      'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.';
    (document.getElementById('p_what') as HTMLElement).textContent = p_what;
  }
}
