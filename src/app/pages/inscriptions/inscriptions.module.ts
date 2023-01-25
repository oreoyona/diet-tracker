import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InscriptionsPageRoutingModule } from './inscriptions-routing.module';
import { InscriptionsPage } from './inscriptions.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionsPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [InscriptionsPage]
})
export class InscriptionsPageModule {}
