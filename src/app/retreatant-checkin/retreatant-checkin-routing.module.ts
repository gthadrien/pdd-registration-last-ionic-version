import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetreatantCheckinPage } from './retreatant-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: RetreatantCheckinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetreatantCheckinPageRoutingModule {}
