import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { PlatformStepsComponent } from './platform-steps/platform-steps.component';
import { PlatformDetailsComponent } from './platform-details/platform-details.component';


@NgModule({
  declarations: [PlatformComponent, PlatformStepsComponent, PlatformDetailsComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
