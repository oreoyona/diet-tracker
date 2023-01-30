import { Component, HostBinding, Inject, Input, OnChanges, OnInit, SimpleChange, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, of, Subscription } from 'rxjs';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit, OnChanges, OnDestroy{
  @Input() numberOfCups!: number;
  @Input() totalOfCups!: number;

  submanager = new Subscription();

  result$!: Observable<number[]>;
  valeurs: number[] = [];


  @HostBinding('attr.style')
  public get Value() {
    return this.document.documentElement.style.setProperty("--value", `${this.value}`)

  }

  ratio!: number;
  value: number = (450 - 450 * this.ratio);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnChanges(changes: SimpleChange | any) {
    this.result$ = of([this.numberOfCups, this.totalOfCups]);
    if (changes["numberOfCups"]) {
      this.valeurs = [];
      
      this.result$!.subscribe(v => v.forEach(el => this.valeurs.push(el)));
      this.submanager.add(<Subscription><unknown>this.result$);
      this.ratio = (this.numberOfCups/this.totalOfCups)*100;
      this.value = (450 - 450 * (this.ratio/100));
    }
  }
  ngOnInit() {
    this.result$ = of([this.numberOfCups, this.totalOfCups])
    this.result$?.subscribe(v => v.forEach(el => this.valeurs.push(el)));
    this.submanager.add(<Subscription><unknown>this.result$);
    this.value = (450 - 450 * (this.valeurs[0] / this.valeurs[1]));
    this.ratio = (this.numberOfCups/this.totalOfCups)*100;
  }

  ngOnDestroy(): void {
      this.submanager.unsubscribe();
  }

}
