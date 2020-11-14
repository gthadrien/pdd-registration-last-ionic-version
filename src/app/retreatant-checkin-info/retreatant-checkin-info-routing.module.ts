import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetreatantCheckinInfoPage } from './retreatant-checkin-info.page';

const routes: Routes = [
  {
    path: '',
    component: RetreatantCheckinInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetreatantCheckinInfoPageRoutingModule {}
