import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KokenPageRoutingModule } from './koken-routing.module';

import { KokenPage } from './koken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KokenPageRoutingModule
  ],
  declarations: [KokenPage]
})
export class KokenPageModule {}
