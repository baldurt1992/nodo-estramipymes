import { Chart, elements } from "chart.js/auto";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

(async function () {
    const data = [
        { precio: 96000, valor: 102000 }
    ];

    const options = {

        aspectRatio: 1,

        scales: {
            x: {
                min: 90000,
                max: 110000,
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
                min: 90000,
                max: 110000,
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
            title:{
                display: true,
                text: 'Reloj Estratégico',
                font:{
                    size: 30,
                },
            },
            legend:{
                display: false
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 100000,
                        yMax: 100000,
                        xMin: 94000,
                        xMax: 106000,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                        arrowHeads: {
                            start: { enabled: true },
                            end: { enabled: true },
                            display: true
                        },
                    },
                    label1: {
                        type: 'label',
                        xValue: 93000,
                        yValue: 100000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Bajo', 'precio'],
                        font: {
                            size: 18
                        }
                    },

                    line2: {
                        type: 'line',
                        yMin: 94000,
                        yMax: 106000,
                        xMin: 100000,
                        xMax: 100000,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                        arrowHeads: {
                            start: { enabled: true },
                            end: { enabled: true },
                            display: true
                        },
                    },
                    label2: {
                        type: 'label',
                        xValue: 100000,
                        yValue: 107000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Diferenciación'],
                        font: {
                            size: 18
                        }
                    },

                    line3: {
                        type: 'line',
                        yMin: 95000,
                        yMax: 105000,
                        xMin: 95000,
                        xMax: 105000,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                        arrowHeads: {
                            start: { enabled: true },
                            end: { enabled: true },
                            display: true
                        },
                    },
                    label3a: {
                        type: 'label',
                        xValue: 107000,
                        yValue: 105000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Diferenciación', 'segmentada'],
                        font: {
                            size: 18
                        }
                    },
                    label3b: {
                        type: 'label',
                        xValue: 94000,
                        yValue: 94000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Bajo precio /', 'Valor añadido'],
                        font: {
                            size: 18
                        }
                    },

                    line4: {
                        type: 'line',
                        yMin: 105000,
                        yMax: 95000,
                        xMin: 95000,
                        xMax: 105000,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                        arrowHeads: {
                            start: { enabled: true },
                            end: { enabled: true },
                            display: true
                        },
                    },
                    label4: {
                        type: 'label',
                        xValue: 94000,
                        yValue: 106000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Híbrida'],
                        font: {
                            size: 18
                        }
                    },

                    elipse_center: {
                        type: 'ellipse',
                        yMin: 99500,
                        yMax: 100500,
                        xMin: 99500,
                        xMax: 100500,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                    },
                    elipse_bottom: {
                        type: 'ellipse',
                        yMin: 94000,
                        yMax: 99000,
                        xMin: 97500,
                        xMax: 109500,
                        borderColor: 'rgb(0, 0, 0)',
                        borderWidth: 2,
                        rotation: -45,
                        backgroundColor: 'rgba(255, 99, 132, 0)'
                    },
                    label_ellipse: {
                        type: 'label',
                        xValue: 107000,
                        yValue: 94000,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['Estrategias', 'destinadas al', 'fracaso'],
                        font: {
                            size: 18
                        }
                    },
                }
            }
        }
    };

    const config = {
        type: 'scatter',
        data: {
            datasets: [
                // labels: data.map(row => row.precio),
                {
                    label: 'Reloj Estratégico',
                    data: data.map(row => ({ x: row.precio, y: row.valor }))
                },
            ]
        },
        options,
    };

    new Chart(
        document.getElementById('reloj_estrategico'),
        config
    );
})();