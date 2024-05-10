import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployerRoutingModule } from './features-module/employer/employer-routing.module';
import { ApplicationRoutingModule } from './features-module/application/application-routing.module';
import { AgentRoutingModule } from './features-module/agent/agent-routing.module';
import { PropertiesRoutingModule } from './features-module/properties/properties-routing.module';
import { BodyRoutingModule } from './features-module/body/body-routing.module';
import { BodyAppComponent } from './features-module/body/body-app/body-app.component';
import { DataService } from '../../framework/ui/kendo/grid/src/data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BodyAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployerRoutingModule,
    ApplicationRoutingModule,
    AgentRoutingModule,
    PropertiesRoutingModule,
    BodyRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
