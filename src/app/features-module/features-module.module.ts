import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesModuleRoutingModule } from './features-module-routing.module';
import { BodyAppComponent } from './body/body-app/body-app.component';


@NgModule({
  declarations: [
    // BodyAppComponent
  ],
  imports: [
    CommonModule,
    FeaturesModuleRoutingModule
  ]
})
export class FeaturesModuleModule { }
