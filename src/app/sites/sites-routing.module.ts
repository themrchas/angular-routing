import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Site1Component } from './site1/site1.component';
import { Site2Component } from './site2/site2.component';
import { Site3Component } from './site3/site3.component';

const sitesRoutes: Routes = [

  { path: 'site1', component: Site1Component},
  { path: 'site2/:name', component: Site2Component},
  { path: 'site3/:firstName/:lastName', component: Site3Component}
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(sitesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SitesRoutingModule { }
