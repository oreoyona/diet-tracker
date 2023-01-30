import { Component, HostBinding, Inject, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit, OnChanges {
  @Input() numberOfCups!: number;
  @Input() totalOfCups!: number;
  result$?: Observable<number[]>;


  valeurs: number[] = [];


  @HostBinding('attr.style')
  public get Value() {
    return this.document.documentElement.style.setProperty("--value", `${this.value}`)

  }
  
  ratio!: number;
  value:number =  (450 - 450 * this.ratio);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnChanges(changes: SimpleChange | any) {
    
    if (changes["totalOfCups"]){
      this.result$?.subscribe(v => v.forEach(el => this.valeurs.push(el)))

    }
  }
  ngOnInit() {
    this.result$ = of([this.numberOfCups, this.totalOfCups]);
    this.result$?.subscribe(v => v.forEach(el => this.valeurs.push(el)));
    this.ratio =( this.valeurs[0] / this.valeurs[1])/100;
   
    this.value =  (450 - 450 * 0.5);

    this.document.documentElement.style.setProperty("--value", `${this.value}`);

   console.log(this.value)

   
   

  }
    

}
