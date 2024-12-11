import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualitySeatsPage } from './quality-seats.page';

const routes: Routes = [
  {
    path: '',
    component: QualitySeatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualitySeatsPageRoutingModule {}
