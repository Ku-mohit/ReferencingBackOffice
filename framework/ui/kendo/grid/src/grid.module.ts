import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { GridTypeComponent } from './grid.type';
import {
  ExcelModule,
  GridModule,
  PDFModule,
} from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [GridTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    FormlyFormFieldModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            props: {
              width: '100%',
              height: '400px',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyGridModule {}
