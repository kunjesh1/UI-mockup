import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then(mod => mod.PlatformModule)
  },
  {
    path: 'domain',
    loadChildren: () => import('./domains/domains.module').then(mod => mod.DomainsModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./about-section/about-section.module').then(mod => mod.AboutSectionModule)
  }
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  //   pathMatch: 'full'
  // },

  // {
  //   path: '**', redirectTo: 'home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
