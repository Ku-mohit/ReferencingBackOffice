import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormlyModule } from "../../../../framework/core/src/lib/core.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyKendoModule } from '../../../../framework/ui/kendo/src/public_api';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FileDropModule } from '../../../../framework/ui/kendo/file-upload/file-drop.module';
import { FileDropComponent } from '../../../../framework/ui/kendo/file-upload/file-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        ApplicationRoutingModule,
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
        
    ]
})
export class ApplicationModule { }
