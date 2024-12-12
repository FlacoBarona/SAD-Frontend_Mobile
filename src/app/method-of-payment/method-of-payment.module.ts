import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { IonicModule } from '@ionic/angular';
import { MethodOfPaymentPage } from './method-of-payment.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    IonicModule
  ],
  declarations: [MethodOfPaymentPage]  
})
export class MethodOfPaymentPageModule {}
