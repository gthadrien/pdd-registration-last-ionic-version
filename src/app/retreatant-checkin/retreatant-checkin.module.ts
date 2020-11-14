import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinPageRoutingModule } from './retreatant-checkin-routing.module';

import { RetreatantCheckinPage } from './retreatant-checkin.page';
import { ShareModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RetreatantCheckinPageRoutingModule
  ],
  declarations: [RetreatantCheckinPage]
})
export class RetreatantCheckinPageModule {}
