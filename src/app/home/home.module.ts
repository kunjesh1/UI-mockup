import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ContentModule } from '../content/content.module';
import { PlatformModule } from '../platform/platform.module';
import { ScrollableDirective } from './scrollable.directive';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [HomeComponent, ScrollableDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideshowModule,
    ContentModule,
    PlatformModule,
    PagesModule
  ]

})
export class HomeModule { }
