import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-chart-vrio',
  standalone: true,
  templateUrl: './chart-vrio.component.html',
  styleUrls: ['./chart-vrio.component.css'],
})
export class ChartVrioComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    // DATA
    const data = {
      datasets: [
        {
          data: [],
        },
      ],
    };

    // CONST AND VARIABLES
    const aspectRatio = 3;
    const xScale = 100 * aspectRatio;
    const diagonal = (xScale / 5) * 0.8;
    const boxSide = diagonal / Math.sqrt(2);
    const arrow = (xScale / 5) * 0.2;
    const rotation = 45;
    const yTop = 100 - diagonal / 2;
    const yBottom = 0 + diagonal / 3;
    const font_size = 12;

    // Active and default settings

    const defaultColor = '#FFFFFF';
    const activeColor = 'rgba(46, 138, 138, 0)';
    const arrowColor = '#000';

    let valuableBoxColor,
      valuableHArrowColor,
      valuableTrueColor,
      valuableFalseColor;
    let disadvantageArrowColor, disadvantageBoxColor;
    let rareBoxColor, rareHArrowColor, rareTrueColor, rareFalseColor;
    let parityArrowColor, parityBoxColor;
    let inimitableBoxColor,
      inimitableHArrowColor,
      inimitableTrueColor,
      inimitableFalseColor;
    let temporaryArrowColor, temporaryBoxColor;
    let organizationBoxColor,
      organizationHArrowColor,
      organizationTrueColor,
      organizationFalseColor;
    let unusedArrowColor, unusedBoxColor;
    let sustainedBoxColor;

    // Set initial color
    valuableBoxColor =
      valuableHArrowColor =
      valuableTrueColor =
      valuableFalseColor =
      disadvantageArrowColor =
      disadvantageBoxColor =
      rareBoxColor =
      rareHArrowColor =
      rareTrueColor =
      rareFalseColor =
      parityArrowColor =
      parityBoxColor =
      inimitableBoxColor =
      inimitableHArrowColor =
      inimitableTrueColor =
      inimitableFalseColor =
      temporaryArrowColor =
      temporaryBoxColor =
      organizationBoxColor =
      organizationHArrowColor =
      organizationTrueColor =
      organizationFalseColor =
      unusedArrowColor =
      unusedBoxColor =
      sustainedBoxColor =
        defaultColor;

    // Declare color functions depending on user selection

    // disadvantage selection
    function valuableCore() {
      valuableBoxColor = activeColor;
    }
    function valuableSpecific() {
      disadvantageArrowColor =
        disadvantageBoxColor =
        valuableFalseColor =
          activeColor;
    }

    // parity selection
    function rareCore() {
      valuableCore();
      valuableHArrowColor = activeColor;
      valuableTrueColor = rareBoxColor = activeColor;
    }
    function rareSpecific() {
      parityArrowColor = activeColor;
      rareFalseColor = parityBoxColor = activeColor;
    }

    // temporary selection
    function inimitableCore() {
      rareCore();
      rareHArrowColor = activeColor;
      rareTrueColor = inimitableBoxColor = activeColor;
    }
    function inimitableSpecific() {
      temporaryArrowColor = activeColor;
      inimitableFalseColor = temporaryBoxColor = activeColor;
    }

    // unused selection
    function organizationCore() {
      inimitableCore();
      inimitableHArrowColor = activeColor;
      inimitableTrueColor = organizationBoxColor = activeColor;
    }
    function organizationSpecific() {
      unusedArrowColor = activeColor;
      organizationFalseColor = unusedBoxColor = activeColor;
    }

    // sustained selection
    function totalCore() {
      organizationCore();
      organizationHArrowColor = activeColor;
      organizationTrueColor = sustainedBoxColor = activeColor;
    }

    let userSelection = '';

    // Testing
    userSelection = 'parity';

    if (userSelection === 'disadvantage') {
      valuableCore();
      valuableSpecific();
    } else if (userSelection === 'parity') {
      rareCore();
      rareSpecific();
    } else if (userSelection === 'temporary') {
      inimitableCore();
      inimitableSpecific();
    } else if (userSelection === 'unused') {
      organizationCore();
      organizationSpecific();
    } else if (userSelection === 'sustained') {
      totalCore();
    }

    // CHART OPTIONS

    const options: ChartConfiguration<'scatter'>['options'] = {
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
        },
      },

      plugins: {
        title: {
          display: true,
          text: '',
          font: {
            size: 30,
            weight: 'bold',
            family: 'Arial',
          },
          color: '#000',
          align: 'center' as const,
        },

        legend: {
          display: false,
        },

        annotation: {
          annotations: {
            valuableBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 0,
              xMax: diagonal,
              sides: 4,
              radius: 0,
              backgroundColor: valuableBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            valuableLabel: {
              type: 'label' as const,
              xValue: diagonal / 2,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Valioso'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            valuableHArrow: {
              type: 'line' as const,
              yMin: yTop,
              yMax: yTop,
              xMin: diagonal,
              xMax: diagonal + arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: arrowColor,
            },
            valuableTrue: {
              type: 'label' as const,
              xValue: diagonal + arrow / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            valuableFalse: {
              type: 'label' as const,
              xValue: diagonal - arrow - 20,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#fff',
            },
            disadvantageLabel: {
              type: 'label' as const,
              xValue: diagonal / 2,
              yValue: yBottom,
              backgroundColor: valuableBoxColor,
              content: ['Desventaja', 'competitiva'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
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
              borderColor: arrowColor,
            },
            disadvantageBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 0,
              xMax: diagonal,
              backgroundColor: 'rgba(46, 138, 138, 0)',
              borderWidth: 2,
              borderColor: '#000',
            },

            // RARE + PARITY
            rareBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: diagonal + arrow,
              xMax: 2 * diagonal + arrow,
              sides: 4,
              radius: 0,
              backgroundColor: rareBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            rareLabel: {
              type: 'label' as const,
              xValue: (3 * diagonal) / 2 + arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Raro'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
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
              borderColor: arrowColor,
            },
            rareTrue: {
              type: 'label' as const,
              xValue: 2 * diagonal + (3 * arrow) / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            rareFalse: {
              type: 'label' as const,
              xValue: (4 * diagonal) / 3 + arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            parityBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: diagonal + arrow,
              xMax: 2 * diagonal + arrow,
              backgroundColor: parityBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            parityLabel: {
              type: 'label' as const,
              xValue: (3 * diagonal) / 2 + arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Paridad', 'competitiva'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            parityArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: (3 * diagonal) / 2 + arrow,
              xMax: (3 * diagonal) / 2 + arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: arrowColor,
            },

            // INIMITABLE + TEMPORARY
            inimitableBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 2 * diagonal + 2 * arrow,
              xMax: 3 * diagonal + 2 * arrow,
              sides: 4,
              radius: 0,
              backgroundColor: inimitableBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            inimitableLabel: {
              type: 'label' as const,
              xValue: (5 * diagonal) / 2 + 2 * arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Inimitable'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
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
              borderColor: arrowColor,
            },
            inimitableTrue: {
              type: 'label' as const,
              xValue: 3 * diagonal + (5 * arrow) / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            inimitableFalse: {
              type: 'label' as const,
              xValue: (7 * diagonal) / 3 + 2 * arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            temporaryBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 2 * (diagonal + arrow),
              xMax: 3 * diagonal + 2 * arrow,
              backgroundColor: temporaryBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            temporaryLabel: {
              type: 'label' as const,
              xValue: (5 * diagonal) / 2 + 2 * arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva', 'temporal'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            temporaryArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: (5 * diagonal) / 2 + 2 * arrow,
              xMax: (5 * diagonal) / 2 + 2 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: arrowColor,
            },

            // ORGANIZATION
            organizationBox: {
              type: 'polygon' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 3 * diagonal + 3 * arrow,
              xMax: 4 * diagonal + 3 * arrow,
              sides: 4,
              radius: 0,
              backgroundColor: organizationBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            organizationLabel: {
              type: 'label' as const,
              xValue: (7 * diagonal) / 2 + 3 * arrow,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Organizado'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
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
              borderColor: arrowColor,
            },
            organizationTrue: {
              type: 'label' as const,
              xValue: 4 * diagonal + (7 * arrow) / 2,
              yValue: yTop + diagonal / 4,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['SÍ'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            organizationFalse: {
              type: 'label' as const,
              xValue: (10 * diagonal) / 3 + 3 * arrow,
              yValue: yBottom + diagonal / 2 + arrow / 2,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['NO'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            unusedBox: {
              type: 'box' as const,
              yMin: yBottom - diagonal / 3,
              yMax: yBottom + diagonal / 3,
              xMin: 3 * (diagonal + arrow),
              xMax: 4 * diagonal + 3 * arrow,
              backgroundColor: unusedBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            unusedLabel: {
              type: 'label' as const,
              xValue: (7 * diagonal) / 2 + 3 * arrow,
              yValue: yBottom,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva no', 'utilizada'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
            unusedArrow: {
              type: 'line' as const,
              yMin: yTop - diagonal / 2,
              yMax: yBottom + diagonal / 3,
              xMin: (7 * diagonal) / 2 + 3 * arrow,
              xMax: (7 * diagonal) / 2 + 3 * arrow,
              arrowHeads: {
                end: { display: true },
              },
              borderWidth: 2,
              borderColor: arrowColor,
            },

            // SUSTAINED
            sustainedBox: {
              type: 'box' as const,
              yMin: yTop + diagonal / 2,
              yMax: yTop - diagonal / 2,
              xMin: 4 * diagonal + 4 * arrow,
              xMax: 5 * diagonal + 5 * arrow,
              backgroundColor: sustainedBoxColor,
              borderWidth: 2,
              borderColor: '#000',
            },
            sustainedLabel: {
              type: 'label' as const,
              xValue: (9 * diagonal) / 2 + (9 * arrow) / 2,
              yValue: yTop,
              backgroundColor: 'rgba(245,245,245,0)',
              content: ['Ventaja', 'competitiva', 'sostenida'],
              font: {
                size: font_size,
                weight: 'bold',
              },
              color: '#000',
            },
          },
        },
      },
    };

    // CHART DATA

    const config: ChartConfiguration<'scatter'> = {
      type: 'scatter',
      data: data,
      options: options,
    };

    // CREATE CHART

    new Chart(document.getElementById('vrio') as HTMLCanvasElement, config);
  }
}
