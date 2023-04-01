import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeftAPageRoutingModule } from './left-a-routing.module';

import { LeftAPage } from './left-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftAPageRoutingModule
  ],
  declarations: [LeftAPage]
})
export class LeftAPageModule {}
