import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { WaterComponent } from 'src/app/visualisation/components/water/water.component';
import { ChartComponent } from 'src/app/visualisation/components/charts/chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, WaterComponent, ChartComponent]
})
export class DashboardPageModule {}
