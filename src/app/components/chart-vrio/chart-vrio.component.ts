import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-chart-vrio',
  standalone: true,
  templateUrl: './chart-vrio.component.html',
  styleUrls: ['./chart-vrio.component.css']
})
export class ChartVrioComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    // DATA
    const data = {
      // labels: [
      //   'a', 'b'
      // ],
      datasets: [
        {
          // label: 'Radar Estratégico',
          data: [],
        },
      ],
    };

    // CONST AND VARIABLES
    const aspectRatio = 3; //QUESTION: Aspect ratio seems not working due to some http/css config, how to fix it?
    const xScale = 100 * aspectRatio; // QUESTION: This is working but when changing zoom page, it must be refreshed in order to resize
    const diagonal = xScale / 5 * 0.8; //80% of a 5th part of the total x width (a 5th will be 1 box + 1 arrow, except for the last rectangle)
    const boxSide = diagonal / Math.sqrt(2);
    const arrow = xScale / 5 * 0.2; //20% of a 5th part of the total x width 
    const rotation = 45;
    const yTop = 100 - diagonal / 2; //Set the center of polygon to locate it at the top of the chart
    const yBottom = 0 + diagonal / 3;
    const font_size = 15;

    // Active and default settings

    const defaultColor = 'rgb(102, 102, 102)';
    const activeColor = 'rgb(255, 191, 0)';

    let valuableBoxColor, valuableHArrowColor, valuableTrueColor, valuableFalseColor;
    let disadvantageArrowColor, disadvantageBoxColor;
    let rareBoxColor, rareHArrowColor, rareTrueColor, rareFalseColor;
    let parityArrowColor, parityBoxColor;
    let inimitableBoxColor, inimitableHArrowColor, inimitableTrueColor, inimitableFalseColor;
    let temporaryArrowColor, temporaryBoxColor;
    let organizationBoxColor, organizationHArrowColor, organizationTrueColor, organizationFalseColor;
    let unusedArrowColor, unusedBoxColor;
    let sustainedBoxColor;

    // Set initial color
    valuableBoxColor = valuableHArrowColor = valuableTrueColor = valuableFalseColor =
      disadvantageArrowColor = disadvantageBoxColor =
      rareBoxColor = rareHArrowColor = rareTrueColor = rareFalseColor =
      parityArrowColor = parityBoxColor =
      inimitableBoxColor = inimitableHArrowColor = inimitableTrueColor = inimitableFalseColor =
      temporaryArrowColor = temporaryBoxColor =
      organizationBoxColor = organizationHArrowColor = organizationTrueColor = organizationFalseColor =
      unusedArrowColor = unusedBoxColor = sustainedBoxColor = defaultColor;

    // Declare color functions depending on user selection

    // disadvantage selection
    function valuableCore() {
      valuableBoxColor = activeColor;
    }
    function valuableSpecific() {
      disadvantageArrowColor = disadvantageBoxColor = valuableFalseColor = activeColor;
    }

    // parity selection
    function rareCore() {
      valuableCore();
      valuableHArrowColor = valuableTrueColor = rareBoxColor = activeColor;
    }
    function rareSpecific() {
      parityArrowColor = rareFalseColor = parityBoxColor = activeColor;
    }

    // temporary selection
    function inimitableCore() {
      rareCore();
      rareHArrowColor = rareTrueColor = inimitableBoxColor = activeColor;
    }
    function inimitableSpecific() {
      temporaryArrowColor = inimitableFalseColor = temporaryBoxColor = activeColor;
    }

    //  unused selection
    function organizationCore() {
      inimitableCore();
      inimitableHArrowColor = inimitableTrueColor = organizationBoxColor = activeColor;
    }
    function organizationSpecific() {
      unusedArrowColor = organizationFalseColor = unusedBoxColor = activeColor;
    }

    //  sustained selection
    function totalCore() {
      organizationCore();
      organizationHArrowColor = organizationTrueColor = sustainedBoxColor = activeColor;
    }

    // 5 Possible values depending on what user selected: "disadvantage", "parity", "temporary", "unused" or "sustained"
    let userSelection = ""; // CAUTION: This value must be connected to user Selection from form results.

    // Testing
    userSelection = "";

    if (userSelection === "disadvantage") {

      valuableCore();
      valuableSpecific();

    } else if (userSelection === "parity") {

      rareCore();
      rareSpecific();

    } else if (userSelection === "temporary") {

      inimitableCore();
      inimitableSpecific();

    } else if (userSelection === "unused") {

      organizationCore();
      organizationSpecific();

    } else if (userSelection === "sustained") {

      totalCore();
    }

    // CHART OPTIONS

    // Defines the characteristics of the chart. This parameter will be passed to the chart instance
    const options = {

      aspectRatio: aspectRatio,

      scales: {
        x: {
          min: 0,
          max: xScale,
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
          display: true,
          text: 'Análisis VRIO',
          font: {
            size: 30,
          },
          align: 'center' as const,
        },

        legend: {
          display: false
        },

        // This chart is mainly made up with annotation figures. These are shown below.
        annotation: {
          annotations: {

            // VALUABLE + DISADVANTAGE
            valuableBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2, // Y axis will always be 100 for this excercise, then 50 is the middle point and boxSide/2 is half height
              yMax: yTop - diagonal / 2,
              xMin: 0,
              xMax: diagonal,
              sides: 4,
              radius: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: valuableBoxColor,
            },
            valuableLabel: {
              type: 'label' as const,
              xValue: diagonal / 2,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Valioso'],
              font: {
                size: font_size
              }
            },
            valuableHArrow: {
              type: 'line' as const,
              yMin: yTop,
              yMax: yTop,
              xMin: diagonal, //CHECK if is there any offset (arrow is not touching polygon corners)
              xMax: diagonal + arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: valuableHArrowColor,
            },
            valuableTrue: {
              type: 'label' as const,
              xValue: diagonal + arrow / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size
              },
              color: valuableTrueColor,
            },
            valuableFalse: {
              type: 'label' as const,
              xValue: diagonal / 3,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size
              },
              color: valuableFalseColor,
            },
            disadvantageLabel: {
              type: 'label' as const,
              xValue: diagonal / 2,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Desventaja', 'competitiva'],
              font: {
                size: font_size
              },
            },
            disadvantageArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: 0 + diagonal / 2,
              xMax: 0 + diagonal / 2,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: disadvantageArrowColor,
            },
            disadvantageBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 0,
              xMax: diagonal,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: disadvantageBoxColor,
            },

            // RARE + PARITY
            rareBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: diagonal + arrow, // Starting point will be the sum of all the figures already drawn
              xMax: 2 * diagonal + arrow, // Ending point will be starting point plus boxSide width
              sides: 4,
              radius: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: rareBoxColor,
            },
            rareLabel: {
              type: 'label' as const,
              xValue: 3 * diagonal / 2 + arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Raro'],
              font: {
                size: font_size
              }
            },
            rareHArrow: {
              type: 'line' as const,
              yMin: yTop,
              yMax: yTop,
              xMin: 2 * diagonal + arrow,
              xMax: 2 * diagonal + 2 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: rareHArrowColor,
            },
            rareTrue: {
              type: 'label' as const,
              xValue: 2 * diagonal + 3 * arrow / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size
              },
              color: rareTrueColor,
            },
            rareFalse: {
              type: 'label' as const,
              xValue: 4 * diagonal / 3 + arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size
              },
              color: rareFalseColor,
            },
            parityBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: diagonal + arrow,
              xMax: 2 * diagonal + arrow,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: parityBoxColor,
            },
            parityLabel: {
              type: 'label' as const,
              xValue: 3 * diagonal / 2 + arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Paridad', 'competitiva'],
              font: {
                size: font_size
              }
            },
            parityArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: 3 * diagonal / 2 + arrow,
              xMax: 3 * diagonal / 2 + arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: parityArrowColor,
            },

            //   INIMITABLE + TEMPORARY
            inimitableBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 2 * diagonal + 2 * arrow,
              xMax: 3 * diagonal + 2 * arrow,
              sides: 4,
              radius: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: inimitableBoxColor,

            },
            inimitableLabel: {
              type: 'label' as const,
              xValue: 5 * diagonal / 2 + 2 * arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Inimitable'],
              font: {
                size: font_size
              }
            },
            inimitableHArrow: {
              type: 'line' as const,
              yMin: yTop,
              yMax: yTop,
              xMin: 3 * diagonal + 2 * arrow,
              xMax: 3 * diagonal + 3 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: inimitableHArrowColor,
            },
            inimitableTrue: {
              type: 'label' as const,
              xValue: 3 * diagonal + 5 * arrow / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size
              },
              color: inimitableTrueColor,
            },
            inimitableFalse: {
              type: 'label' as const,
              xValue: 7 * diagonal / 3 + 2 * arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size
              },
              color: inimitableFalseColor,
            },
            temporaryBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 2 * (diagonal + arrow),
              xMax: 3 * diagonal + 2 * arrow,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: temporaryBoxColor,
            },
            temporaryLabel: {
              type: 'label' as const,
              xValue: 5 * diagonal / 2 + 2 * arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva', 'temporal'],
              font: {
                size: font_size
              }
            },
            temporaryArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: 5 * diagonal / 2 + 2 * arrow,
              xMax: 5 * diagonal / 2 + 2 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: temporaryArrowColor,
            },

            //   ORGANIZATION
            organizationBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 3 * diagonal + 3 * arrow,
              xMax: 4 * diagonal + 3 * arrow,
              sides: 4,
              radius: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: organizationBoxColor,
            },
            organizationLabel: {
              type: 'label' as const,
              xValue: 7 * diagonal / 2 + 3 * arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Organizado'],
              font: {
                size: font_size
              }
            },
            organizationHArrow: {
              type: 'line' as const,
              yMin: yTop,
              yMax: yTop,
              xMin: 4 * diagonal + 3 * arrow,
              xMax: 4 * diagonal + 4 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: organizationHArrowColor,
            },
            organizationTrue: {
              type: 'label' as const,
              xValue: 4 * diagonal + 7 * arrow / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size
              },
              color: organizationTrueColor,
            },
            organizationFalse: {
              type: 'label' as const,
              xValue: 10 * diagonal / 3 + 3 * arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size
              },
              color: organizationFalseColor,
            },
            unusedBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 3 * (diagonal + arrow),
              xMax: 4 * diagonal + 3 * arrow,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: unusedBoxColor,
            },
            unusedLabel: {
              type: 'label' as const,
              xValue: 7 * diagonal / 2 + 3 * arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva no', 'utilizada'],
              font: {
                size: font_size
              }
            },
            unusedArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: 7 * diagonal / 2 + 3 * arrow,
              xMax: 7 * diagonal / 2 + 3 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: unusedArrowColor,
            },


            // SUSTAINED                                  

            sustainedBox: {
              type: 'box' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 4 * diagonal + 4 * arrow,
              xMax: 5 * diagonal + 5 * arrow,
              backgroundColor: 'rgba(255, 99, 132, 0.25)',
              borderWidth: 2,
              borderColor: sustainedBoxColor,
            },
            sustainedLabel: {
              type: 'label' as const,
              xValue: 9 * diagonal / 2 + 9 * arrow / 2,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva', 'sostenida'],
              font: {
                size: font_size
              }
            },

          },
        }

      }
    };

    // CHART DATA

    const config: ChartConfiguration<'scatter'> = {
      type: 'scatter',
      data: data,
      options: options,
    };

    // CREATE CHART 

    new Chart(
      document.getElementById('vrio') as HTMLCanvasElement,
      config
    );
  }
}
