import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtPage } from './bt.page';

const routes: Routes = [
  {
    path: '',
    component: BtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtPageRoutingModule {}
