import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';



@NgModule({
  declarations: [AboutComponent, HowItWorksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    HowItWorksComponent
  ]
})
export class ContentModule { }
