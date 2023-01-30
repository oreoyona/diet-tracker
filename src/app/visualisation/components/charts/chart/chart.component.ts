import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { every, NumberValue } from 'd3';
import { WaterService } from 'src/app/visualisation/services/water.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input()
  public data: { ml: number; jour: string; }[] = [];

  //elements necessary to draw to chart

  private width = 700;
  private height = 700;
  private margin = 50;

  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;

  /**
   * initChart - initializes the elements of the chart to be drawn
   */
  initChart = () => {
    this.svg = d3
      .select(this.chartElem.nativeElement)
      .select('.linechart')
      .append('svg')
      .attr('height', this.height);


    this.svgInner = this.svg
      .append('g')
      .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');
    this.yScale = d3
      .scaleLinear()
      .domain([d3.max(this.data, (d: any) => d.ml) + 1, d3.min(this.data, (d: any) => d.ml) - 1])
      .range([0, this.height - 2 * this.margin]);
    this.xScale = d3.scaleTime()
      .domain(<any | Date>d3.extent(this.data, function (d) { return new Date(d.jour) }));


    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px, 0)');
    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', '2px');
  }

  /**
   * drawChart - draw the svg according to the data
   */
  drawChart = () => {
    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3
      .axisBottom(this.xScale)
      .ticks(10)
      .tickFormat(<any>d3.timeFormat('%m / %Y'));

    this.xAxis.call(xAxis);
    const yAxis = d3
      .axisRight(this.yScale);
    this.yAxis.call(yAxis);


    const line = d3
      .line()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveMonotoneX);
    const points: [number, number][] = this.data.map(
      d => [this.xScale(new Date(d.jour)), this.yScale(d.ml)]
    );
    this.lineGroup.attr('d', line(points));
  }

  constructor(public chartElem: ElementRef, private waterService: WaterService) { }

  ngOnInit() {
    this.initChart();
    this.drawChart();
  }

}
