import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SitesModule } from './sites/sites.module';



@NgModule({
  declarations: [
    AppComponent
    
 ],
  imports: [
    BrowserModule,
    SitesModule,
    AppRoutingModule,
  
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
