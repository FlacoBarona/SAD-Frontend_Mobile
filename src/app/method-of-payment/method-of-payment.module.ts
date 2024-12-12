import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MethodOfPaymentPageRoutingModule } from './method-of-payment-routing.module';

import { MethodOfPaymentPage } from './method-of-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodOfPaymentPageRoutingModule
  ],
  declarations: [MethodOfPaymentPage]
})
export class MethodOfPaymentPageModule {}
