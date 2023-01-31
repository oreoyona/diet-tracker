import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterPageRoutingModule } from './water-routing.module';

import { WaterPage } from './water.page';
import { WaterComponent } from 'src/app/visualisation/components/water/water.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterPageRoutingModule
  ],
  declarations: [WaterPage, WaterComponent]
})
export class WaterPageModule {}
