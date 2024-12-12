import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodOfPaymentPage } from './method-of-payment.page';

const routes: Routes = [
  {
    path: '',
    component: MethodOfPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodOfPaymentPageRoutingModule {}
