import { Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit, OnChanges {
  
  @HostBinding('attr.style')
  public get Value(){
    return this.sanitiser.bypassSecurityTrustStyle(`--value: ${this.value}`)

  }

 
  value = (450 - 450 * 0.43);

  constructor(private sanitiser: DomSanitizer) { }
  ngOnChanges(change: any){
    
  }
  ngOnInit() {}

}
