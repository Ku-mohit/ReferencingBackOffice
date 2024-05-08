import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '../../../../../framework/core/src/lib/models';


@Component({
  selector: 'employer-details',
  templateUrl: './employer-details.component.html',
  styleUrl: './employer-details.component.css',
  
})
export class EmployerDetailsComponent {

  myForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  
  myCompanyForm = new FormGroup({});
  companyModel: any = {};
  companyOptions: FormlyFormOptions = {};
  companyFields: FormlyFieldConfig[];

  constructor() { }

  ngOnInit(): void {
    this.setCompany();
  }

  onSubmit() { }

  // setForm() {
  //   this.fields = [
  //     {
  //       fieldGroupClassName: 'row my-2',
  //       fieldGroup: [
  //         {
  //           className: 'col-sm-3',
  //           type: 'input',
  //           key: 'applicantId',
  //           props: {
  //             label: 'Applicant ID',
  //           },
  //         },
  //         {
  //           template: `<button style:"display:flex;text-align:center;justify-content:center">Search</button>`,
  //           className: 'col-sm-1 btn btn-outline-primary btn-sm',
  //         },
  //         {
  //           className: 'col-sm-2',
  //           key: 'status',
  //           type: 'select',
  //           props: {
  //             label: 'Status',
  //             options: [
  //               { value: 1, text: 'Completed' },
  //               { value: 2, text: 'Ongoing' },
  //               { value: 3, text: 'Planning' },
  //             ],
  //             primitive: true,
  //             required: true,
  //           },
  //         },
  //         {
  //           className: 'col-sm-3',
  //           key: 'startDate',
  //           type: 'date',
  //           props: {
  //             label: 'Start Date',
  //             primitive: true,
  //             required: true,
  //             format: 'dd/MM/yyyy',
  //           },
  //         },
  //         {
  //           className: 'col-sm-3',
  //           key: 'endDate',
  //           type: 'date',
  //           props: {
  //             label: 'End Date',
  //             primitive: true,
  //             required: true,
  //             format: 'dd/MM/yyyy',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       fieldGroupClassName: 'row',
  //       fieldGroup: [
  //         {
  //           className: 'col-sm-4',
  //           type: 'input',
  //           key: 'globalSearch',
  //           props: {
  //             label: 'Global Search',
  //           },
  //         },
  //         {
  //           template: `<button style:"display:flex;text-align:center;justify-content:center">Search</button>`,
  //           className: 'col-sm-1 btn btn-outline-primary btn-sm',
  //         },
  //         {
  //           className: 'col-sm-3',
  //           key: 'agentType',
  //           type: 'select',
  //           props: {
  //             label: 'Agent Type',
  //             options: [
  //               { value: 1, text: 'Type 1' },
  //               { value: 2, text: 'Type 2' },
  //             ],
  //             primitive: true,
  //             required: true,
  //           },
  //         },
  //         {
  //           className: 'col-sm-4',
  //           type: 'input',
  //           key: 'agentName',
  //           props: {
  //             label: 'Agent Name',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       fieldGroupClassName: 'row',
  //       fieldGroup: [
  //         {
  //           className: 'col-sm-3',
  //           key: 'highRiskTaskId',
  //           type: 'select',
  //           props: {
  //             label: 'High risk task',
  //             options: [
  //               { value: 1, text: 'Yes' },
  //               { value: 2, text: 'No' },
  //             ],
  //             primitive: true,
  //             required: true,
  //           },
  //         },
  //         {
  //           className: 'col-sm-3',
  //           key: 'validationTask',
  //           type: 'select',
  //           props: {
  //             label: 'Validation task',
  //             options: [
  //               { value: 1, text: 'Yes' },
  //               { value: 2, text: 'No' },
  //             ],
  //             primitive: true,
  //             required: true,
  //           },
  //         },
  //       ]
  //     }
  //   ];
  // }

  setCompany() {
    this.companyFields = [
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-sm-6',
            type: 'input',
            key: 'companyName',
            props: {
              label: 'Company Name',

            },
          },
          {
            className: 'col-sm-6',
            type: 'input',
            key: 'contactName',
            props: {
              label: 'Contact Name',
            },
          },
        ],
      },
      {
        className: 'row mt-3',
        template: `<h5>Contact Details</h5>`,
      },
      {
        fieldGroupClassName: 'row mb-2',
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'street',
            props: {
              label: 'Street',

            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'city',
            props: {
              label: 'City',
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'postcode',
            props: {
              label: 'Postcode',
            },
          },
        ],
      },
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'email',
            props: {
              label: 'Email',

            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'tele',
            props: {
              label: 'Telephone Number',
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'mobile',
            props: {
              label: 'Mobile Number',
            },
          },
        ],
      },
      {
        className: 'row mt-3',
        template: `<h5>Preference</h5>`,
      },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'street',
            props: {
              label: 'Street',
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'city',
            props: {
              label: 'City',
            },
          },
        ],
      },
      {
        className: 'row mt-3',
        template: `<h5>Documents</h5>`,
      },
      {
        fieldGroupClassName: 'row my-3',
        fieldGroup: [
          {
            className: 'col-sm-3',
            key: 'signDoc',
            type: 'checkbox',
            props: {
              label: "Signed Doc.Required",
            },
          },
          {
            className: 'col-sm-3',
            key: 'acknowledge',
            type: 'checkbox',
            props: {
              label: "Acknowledge Receipt",
            },
          },
          {
            className: 'col-sm-3',
            key: 'salary',
            type: 'checkbox',
            props: {
              label: "Salary Confirmation Required",
            },
          },
          {
            className: 'col-sm-3',
            key: 'fees',
            type: 'checkbox',
            props: {
              label: "Fee Required",
            },
          },
        ],
      },
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'select',
            key: 'contactType',
            props: {
              label: 'Contact Type',
              options: [
                { value: 1, text: 'Email' },
                { value: 2, text: 'Phone' },
                { value: 3, text: 'Fax' },
                { value: 4, text: 'Post' },
              ],

            },
          },
          {
            className: 'col-sm-4',
            type: 'select',
            key: 'preferenceType',
            props: {
              label: 'Preference Type',
              options: [
                { value: 1, text: 'Email' },
                { value: 2, text: 'Phone' },
                { value: 3, text: 'Fax' },
                { value: 4, text: 'Post' },
              ],

            },
          },
        ],
      },
      {
        className: 'row mt-3',
        template: `<h5>Private Notes</h5>`,
      },
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-sm-12',
            type: 'textarea',
            key: 'note',
          },
        ],
      },
    ];
  }
}
