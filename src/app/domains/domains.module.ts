import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { DomainsComponent } from './domains.component';
import { MatDividerModule } from '@angular/material/divider';
import { PagesModule } from '../pages/pages.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [DomainsComponent, MenuPanelComponent],
  imports: [
    CommonModule,
    DomainsRoutingModule,
    MatDividerModule,
    PagesModule,
    MatSlideToggleModule,
    MatMenuModule
  ]
})
export class DomainsModule { }
