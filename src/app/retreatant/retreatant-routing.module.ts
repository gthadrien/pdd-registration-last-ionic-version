import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetreatantPage } from './retreatant.page';

const routes: Routes = [
  {
    path: '',
    component: RetreatantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetreatantPageRoutingModule {}
