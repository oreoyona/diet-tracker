import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/common/auth.guard';
import { ProfileSettingPage } from '../profile-setting/profile-setting.page';


import { InscriptionsPage } from './inscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionsPage
  },
  {
    path:'options',
    component: ProfileSettingPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class InscriptionsPageRoutingModule { }
