import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '../../../../core/src/lib/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '../../form-field';

import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormlyFieldButton } from './FormlyFieldButton';

@NgModule({
  declarations: [FormlyFieldButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyFormFieldModule,
    ButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyButtonModule {}
