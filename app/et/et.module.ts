import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtPageRoutingModule } from './et-routing.module';

import { EtPage } from './et.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtPageRoutingModule
  ],
  declarations: [EtPage]
})
export class EtPageModule {}
