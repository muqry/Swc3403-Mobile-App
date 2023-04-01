import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftAPage } from './left-a.page';

const routes: Routes = [
  {
    path: '',
    component: LeftAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftAPageRoutingModule {}
