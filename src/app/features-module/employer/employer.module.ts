import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';
import { CompanyInfoComponent } from './company-info/company-info.component';


@NgModule({
  declarations: [
    EmployerDetailsComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  exports:[]
})
export class EmployerModule { }
