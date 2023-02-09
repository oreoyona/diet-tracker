import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Observable, of } from 'rxjs';
import { Users } from 'src/app/common/classes/Users';
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
  @Input() data!: Array<Users>
  data$!: Observable<Array<Users>>;
  curratedData!: Array<any>;

  public chart!: Chart;
  ngOnInit() {
    this.data$ = of(this.data);
    this.data$.subscribe(el =>{
      this.curratedData = el;
    })
    
    
  }

  ngOnChanges(): void {
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