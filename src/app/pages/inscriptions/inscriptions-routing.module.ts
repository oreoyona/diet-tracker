import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InscriptionsPage } from './inscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class InscriptionsPageRoutingModule { }
