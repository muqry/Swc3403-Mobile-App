import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtPage } from './at.page';

const routes: Routes = [
  {
    path: '',
    component: AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtPageRoutingModule {}
