import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSectionComponent } from './about-section.component';


const routes: Routes = [
  {
    path: '',
    component: AboutSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutSectionRoutingModule { }
