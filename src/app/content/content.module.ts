import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ApisComponent } from './apis/apis.component';
import {MatIconModule} from '@angular/material/icon';
import { AppIntegrationsComponent } from './app-integrations/app-integrations.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [AboutComponent, HowItWorksComponent, ApisComponent, AppIntegrationsComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AboutComponent,
    HowItWorksComponent,
    ApisComponent,
    AppIntegrationsComponent,
    FooterComponent
  ]
})
export class ContentModule { }
