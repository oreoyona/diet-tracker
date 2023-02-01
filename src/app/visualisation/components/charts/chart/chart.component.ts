import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
  padding: 25px;
  margin-top:12vh;
  }

`]
})
export class ChartComponent implements OnInit {
  public chart!: Chart;
  ngOnInit() {
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