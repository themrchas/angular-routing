import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { Site1Component } from './site1/site1.component';
import { Site2Component } from './site2/site2.component';
import { Site3Component } from './site3/site3.component';


@NgModule({
  declarations: [
    Site1Component,
    Site2Component,
    Site3Component
  ],
  imports: [
    CommonModule,
    SitesRoutingModule
  ]
})
export class SitesModule { }
