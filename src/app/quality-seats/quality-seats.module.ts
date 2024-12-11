import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualitySeatsPageRoutingModule } from './quality-seats-routing.module';

import { QualitySeatsPage } from './quality-seats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualitySeatsPageRoutingModule
  ],
  declarations: [QualitySeatsPage]
})
export class QualitySeatsPageModule {}
