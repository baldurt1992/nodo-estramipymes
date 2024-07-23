import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'; //Para importar los datos extraídos de la API


(async function () {
    const data = await getAquisitionsByYear();
    // [
    //     { year: 2010, count: 10 },
    //     { year: 2011, count: 20 },
    //     { year: 2012, count: 15 },
    //     { year: 2013, count: 25 },
    //     { year: 2014, count: 22 },
    //     { year: 2015, count: 30 },
    //     { year: 2016, count: 28 },
    // ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',

            options: {
                animation: false,

                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }

            },

            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year TBN',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();