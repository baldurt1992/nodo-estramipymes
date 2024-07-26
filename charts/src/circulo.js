import { Chart, elements } from "chart.js/auto";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

(async function () {
    const data = [
        { precio: 50, valor: 50 }
    ];

    const circle_size = [5, 95, 5, 95];
    // const circle_size = [25, 75, 50, 100];
    const diameter = (circle_size[1]-circle_size[0])
    const k = 0.15
    const percent_circle = diameter*k

    // const what_label = "Texto para mostrar en ¿Qué? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ipsum eget mi viverra luctus. Nulla id lectus accumsan, suscipit mauris ac, ultrices tellus. In iaculis bibendum nisl vitae ultricies. Nullam ultrices vehicula quam a fringilla. Nulla eget lacus dictum massa blandit hendrerit. Fusce consectetur dui rhoncus orci volutpat convallis. Nulla facilisi. Duis tempus dolor ac consequat tempor. Curabitur a imperdiet dolor. Pellentesque venenatis massa sapien, in blandit nisi finibus non. Donec ac scelerisque lorem, in finibus lectus. In purus sapien, interdum et magna ac, efficitur efficitur ex. Aliquam convallis massa non scelerisque finibus. Duis a est lorem. Proin auctor mattis libero ac rhoncus"

    const font_size = 15;

    const options = {

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
            title:{
                // display: true,
                // text: 'Círculo Dorado',
                font:{
                    size: 30,
                },
                align: 'center',
            },
            legend:{
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
                    // what_box: {
                    //     type: 'box',
                    //     yMin: 0,
                    //     yMax: 20,
                    //     xMin: 0,
                    //     xMax: 60,
                    //     borderColor: 'rgb(0, 0, 0)',
                    //     borderWidth: 2,
                    //     backgroundColor: '#ed7d00'
                    // },
                    // what_label: {
                    //     type: 'label',
                    //     xValue: 30,
                    //     yValue: 10,
                    //     backgroundColor: 'rgba(245,245,245,0)',
                    //     content: what_label,
                    //     font: {
                    //         size: font_size
                    //     }
                    // },


                    how_circle: {
                        type: 'ellipse',
                        yMin: circle_size[0]+percent_circle,
                        yMax: circle_size[1]-percent_circle,
                        xMin: circle_size[2]+percent_circle,
                        xMax: circle_size[3]-percent_circle,
                        borderColor: '#ffc000',
                        backgroundColor: '#ffc000',
                        borderWidth: 2,
                    },
                    // how_box: {
                    //     type: 'box',
                    //     yMin: 30,
                    //     yMax: 70,
                    //     xMin: 0,
                    //     xMax: 40,
                    //     borderColor: 'rgb(0, 0, 0)',
                    //     borderWidth: 2,
                    //     backgroundColor: '#ffc000',
                    // },

                    why_circle: {
                        type: 'ellipse',
                        yMin: circle_size[0]+(percent_circle*2),
                        yMax: circle_size[1]-(percent_circle*2),
                        xMin: circle_size[2]+(percent_circle*2),
                        xMax: circle_size[3]-(percent_circle*2),
                        borderColor: '#4472c4',
                        backgroundColor: '#4472c4',
                        borderWidth: 2,
                    },
                    // why_box: {
                    //     type: 'box',
                    //     yMin: 80,
                    //     yMax: 100,
                    //     xMin: 0,
                    //     xMax: 60,
                    //     borderColor: 'rgb(0, 0, 0)',
                    //     borderWidth: 2,
                    //     backgroundColor: '#4472c4'
                    // },

                    line_why: {
                        type: 'line',
                        // yMin: 55,
                        // yMax: 90,
                        // xMin: 80,
                        // xMax: 60,
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
                        // yMin: 40,
                        // yMax: 50,
                        // xMin: 65,
                        // xMax: 40,
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
                        // yMin: 27,
                        // yMax: 10,
                        // xMin: 80,
                        // xMax: 60,
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
                        xValue: circle_size[2]+diameter/2,
                        yValue: circle_size[0]+diameter/2,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['¿Por qué?', '¿Para qué?'],
                        font: {
                            size: font_size
                        }
                    },
                    label_how: {
                        type: 'label',
                        xValue: circle_size[2]+diameter/2,
                        yValue: circle_size[0]+diameter*k*1.5,
                        backgroundColor: 'rgba(245,245,245,0)',
                        content: ['¿Cómo?'],
                        font: {
                            size: font_size
                        }
                    },
                    label_what: {
                        type: 'label',
                        xValue: circle_size[2]+diameter/2,
                        yValue: circle_size[0]+diameter*k*0.5,
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

    const config = {
        type: 'scatter',
        data: {
            datasets: [
                // labels: data.map(row => row.precio),
                {
                    label: 'Círculo Dorado',
                    data: data.map(row => ({ x: row.precio, y: row.valor }))
                },
            ]
        },
        options,
    };

    new Chart(
        document.getElementById('circulo_dorado'),
        config
    );
})();