import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ContentModule } from '../content/content.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideshowModule,
    ContentModule
  ]
})
export class HomeModule { }
