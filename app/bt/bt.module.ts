import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BtPageRoutingModule } from './bt-routing.module';

import { BtPage } from './bt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtPageRoutingModule
  ],
  declarations: [BtPage]
})
export class BtPageModule {}
