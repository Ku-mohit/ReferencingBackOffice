import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesDetailsComponent } from './properties-details/properties-details.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    PropertiesDetailsComponent,
    RecordComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
