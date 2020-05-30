import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { PlatformStepsComponent } from './platform-steps/platform-steps.component';
import { PlatformDetailsComponent } from './platform-details/platform-details.component';
import { PagesModule } from '../pages/pages.module';
import { ContentModule } from '../content/content.module';


@NgModule({
  declarations: [PlatformComponent, PlatformStepsComponent, PlatformDetailsComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    PagesModule,
    ContentModule
  ],
  exports: [
    PlatformStepsComponent
  ]
})
export class PlatformModule { }
