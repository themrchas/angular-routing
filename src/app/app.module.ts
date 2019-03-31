import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Site1Component } from './sites/site1/site1.component';
import { Site2Component } from './sites/site2/site2.component';
import { Site3Component } from './sites/site3/site3.component';

const appRoutes: Routes = [

  { path: 'site1', component: Site1Component},
  { path: 'site2/:name', component: Site2Component},
  { path: 'site3/:firstName/:lastName', component: Site3Component},
  { path: '', redirectTo: '/site1',  pathMatch: 'full'  }
];


@NgModule({
  declarations: [
    AppComponent,
    Site1Component,
    Site2Component,
    Site3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
