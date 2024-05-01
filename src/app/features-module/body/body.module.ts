import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyAppComponent } from './body-app/body-app.component';


@NgModule({
  declarations: [
    // BodyAppComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
