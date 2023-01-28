import { Component, HostBinding, Inject, OnChanges, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit, OnChanges {
  
  @HostBinding('attr.style')
  public get Value(){
    return this.document.documentElement.style.setProperty("--value", `${this.value}`)

  }

 
  value = (450 - 450 * 0.43);

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnChanges(change: any){
    
  }
  ngOnInit() {}

}
