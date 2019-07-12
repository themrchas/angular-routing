import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { Site1Component } from './site1/site1.component';
import { Site2Component } from './site2/site2.component';
import { Site3Component } from './site3/site3.component';

//This module 'packages' up everything and can then be imported by app.modules.ts


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
