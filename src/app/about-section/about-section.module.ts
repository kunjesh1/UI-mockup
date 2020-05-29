import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutSectionRoutingModule } from './about-section-routing.module';
import { AboutSectionComponent } from './about-section.component';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [AboutSectionComponent],
  imports: [
    CommonModule,
    AboutSectionRoutingModule,
    PagesModule
  ]
})
export class AboutSectionModule { }
