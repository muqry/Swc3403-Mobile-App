import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
  {
    path: 'left',
    loadChildren: () => import('./left/left.module').then( m => m.LeftPageModule)
  },
  {
    path: 'beginner',
    loadChildren: () => import('./beginner/beginner.module').then( m => m.BeginnerPageModule)
  },
  {
    path: 'advance',
    loadChildren: () => import('./advance/advance.module').then( m => m.AdvancePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'calories',
    loadChildren: () => import('./calories/calories.module').then( m => m.CaloriesPageModule)
  },
  {
    path: 'tabata',
    loadChildren: () => import('./tabata/tabata.module').then( m => m.TabataPageModule)
  },
  {
    path: 'left-a',
    loadChildren: () => import('./left-a/left-a.module').then( m => m.LeftAPageModule)
  },
  {
    path: 'bt',
    loadChildren: () => import('./bt/bt.module').then( m => m.BtPageModule)
  },
  {
    path: 'et',
    loadChildren: () => import('./et/et.module').then( m => m.EtPageModule)
  },
  {
    path: 'nt',
    loadChildren: () => import('./nt/nt.module').then( m => m.NtPageModule)
  },
  {
    path: 'at',
    loadChildren: () => import('./at/at.module').then( m => m.AtPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
