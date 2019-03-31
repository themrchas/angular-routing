import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Site1Component } from './sites/site1/site1.component';
import { Site2Component } from './sites/site2/site2.component';
import { Site3Component } from './sites/site3/site3.component';

/* const appRoutes: Routes = [

  { path: 'site1', component: Site1Component},
  { path: 'site2/:name', component: Site2Component},
  { path: 'site3/:firstName/:lastName', component: Site3Component},
  { path: '', redirectTo: '/site1',  pathMatch: 'full'  }
]; */

const appRoutes: Routes = [
 
  { path: '', redirectTo: '/site1',  pathMatch: 'full'  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
