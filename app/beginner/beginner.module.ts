import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeginnerPageRoutingModule } from './beginner-routing.module';

import { BeginnerPage } from './beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeginnerPageRoutingModule
  ],
  declarations: [BeginnerPage]
})
export class BeginnerPageModule {}
