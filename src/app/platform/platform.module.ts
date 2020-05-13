import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { PlatformStepsComponent } from './platform-steps/platform-steps.component';


@NgModule({
  declarations: [PlatformComponent, PlatformStepsComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
