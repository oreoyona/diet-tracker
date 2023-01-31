import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomePage } from 'src/app/home/home.page';
import { InscriptionsPage } from '../inscriptions/inscriptions.page';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path: 'water',
        children: [
          {
            path:'',
            loadChildren: ()=> import('../water/water.module').then(m=>m.WaterPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
