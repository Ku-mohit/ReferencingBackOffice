import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '../../../../framework/core/src/lib/core.module';
import { FormlyKendoModule } from '../../../../framework/ui/kendo/src/lib/ui-kendo.module';
import { FileDropModule } from '../../../../framework/ui/kendo/file-upload/file-drop.module';
import { FileDropComponent } from '../../../../framework/ui/kendo/file-upload/file-drop.component';


@NgModule({
  declarations: [
    EmployerDetailsComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    ButtonModule,
    FormsModule,
    FormlyModule,
    ReactiveFormsModule,
    FormlyKendoModule,
    FileDropModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
      types: [
        { name: 'file', component: FileDropComponent, wrappers: ['form-field'] },
      ],
      
    }),
    
  ],
  exports:[]
})
export class EmployerModule { }
