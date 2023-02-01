import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WaterService } from 'src/app/visualisation/services/water.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  template: `
  <div class="chart-container">
    <canvas  id="MyChart" >{{ chart }}</canvas>
  </div>
`,
  styles: [`
  .chart-container{
  margin-top:2vh;
  position: relative;
  bottom:0px;
  display: flex;
  }

`]
})
export class ChartComponent implements OnInit, OnChanges {
  public chart!: Chart;
  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.createChart();
  }

  /**
   * createChart - draws the chart 
   */
  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi',
          'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
          {
            barThickness: 2,
            label: "votre consommation en ml",
            data: ['2500', '1900', '3000', '0', '500',
              '1574', '2573'],
            backgroundColor: '#DA22FF'
          }
        ]
      },
      options: {
        plugins: {
          legend: {//Do not show the label
            display: false
          }
        }
      }

    });
  }

}