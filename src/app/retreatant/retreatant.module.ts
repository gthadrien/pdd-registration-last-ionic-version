import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetreatantPageRoutingModule } from './retreatant-routing.module';

import { RetreatantPage } from './retreatant.page';
import { ShareModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetreatantPageRoutingModule,
    ShareModule
  ],
  declarations: [RetreatantPage]
})
export class RetreatantPageModule {}
