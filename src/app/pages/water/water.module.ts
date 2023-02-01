import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterPageRoutingModule } from './water-routing.module';

import { WaterPage } from './water.page';
import { WaterComponent } from 'src/app/visualisation/components/water/water.component';
import { ChartComponent } from 'src/app/visualisation/components/charts/chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterPageRoutingModule
  ],
  declarations: [WaterPage, WaterComponent, ChartComponent]
})
export class WaterPageModule {}
