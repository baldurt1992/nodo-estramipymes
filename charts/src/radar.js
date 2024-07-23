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
      data: [1, 2, 3, 1, 2],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
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