import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtPageRoutingModule } from './at-routing.module';

import { AtPage } from './at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtPageRoutingModule
  ],
  declarations: [AtPage]
})
export class AtPageModule {}
