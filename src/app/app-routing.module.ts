import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  /*{
    path: 'retreatant',
    loadChildren: () => import('./retreatant/retreatant.module').then( m => m.RetreatantPageModule)
  },
  {
    path: 'retreatant-checkin',
    loadChildren: () => import('./retreatant-checkin/retreatant-checkin.module').then( m => m.RetreatantCheckinPageModule)
  },
  {
    path: 'retreatant-checkin-info',
    loadChildren: () => import('./retreatant-checkin-info/retreatant-checkin-info.module').then( m => m.RetreatantCheckinInfoPageModule)
  },*/
  {
    path: 'retreatant-checkin-confirm',
    loadChildren: () => import('./retreatant-checkin-confirm/retreatant-checkin-confirm.module').then( m => m.RetreatantCheckinConfirmPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
