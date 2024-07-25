import { Chart } from "chart.js/auto";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

(async function () {
  const data = {
    labels: [
      'Conocimiento del cliente',
      ['Conocimiento', 'del negocio'],
      ['Coherencia del', 'modelo de negocio'],
      ['Alineación en la', 'comunicación interna'],
      ['Salud', 'financiera'],
    ],
    datasets: [{
      label: 'Radar Estratégico',
      data: [1, 2, 4, 2, 2],
      fill: true,
      backgroundColor: '#01036920',
      borderColor: '#010369',
      pointBackgroundColor: '#010369',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#010369'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          angleLines: {
            display: false
          },
          pointLabels: {
            font: {
              size: 14
            },            
          },
          suggestedMin: 0,
          suggestedMax: 4,
        },
      },
      plugins: {
        title: {
          display: true,
          text: 'Radar Estratégico',
          font:{
            size: 30
          },
          align: 'center'
        },
        legend: {
          display: false
        },
      },
    },
  };

  
  new Chart(
    document.getElementById('radar_estrategico'),
    config
  );
})();