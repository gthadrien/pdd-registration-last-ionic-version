import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinConfirmPageRoutingModule } from './retreatant-checkin-confirm-routing.module';

import { RetreatantCheckinConfirmPage } from './retreatant-checkin-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetreatantCheckinConfirmPageRoutingModule
  ],
  declarations: [RetreatantCheckinConfirmPage]
})
export class RetreatantCheckinConfirmPageModule {}
