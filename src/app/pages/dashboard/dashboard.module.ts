import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ChartComponent } from 'src/app/visualisation/components/charts/chart/chart.component';
import { ToolbarComponent} from '../../common/components/toolbar/toolbar.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, ChartComponent, ToolbarComponent]
})
export class DashboardPageModule {}
