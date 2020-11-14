import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetreatantCheckinConfirmPage } from './retreatant-checkin-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RetreatantCheckinConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetreatantCheckinConfirmPageRoutingModule {}
