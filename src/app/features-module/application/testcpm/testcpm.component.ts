import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '../../../../../framework/core/src/lib/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'testcpm',
  templateUrl: './testcpm.component.html',
  styleUrl: './testcpm.component.css'
})
export class TestcpmComponent {
  myForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  onSubmit(){

  }
  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 mt-5',
            key: 'grid',
            type: 'grid',
            props: {
              label: 'List',
            },
            gridOptions: {
              rowHeight: '100px',
              data:this.getData() ,
              pageable: true,
              pageSize: 5,
              sorting: true,
              searchall: true,
              exportToExcel: true,
              exportToPdf: true,
              actionButton: true,
              actionDetails: [
                {
                  type: 'button',
                  props: {
                    text: 'View',
                    btnType: 'info',
                    onClick: (dataItem: any) => {
                      this.viewDetails(dataItem);
                    },
                  },
                },
              ] as any,
              // columnDefs: [
              //   {
              //     headerName: 'Template Name',
              //     field: 'templateName',
              //     sortable: true,
              //     width: 100,
              //   },
              //   {
              //     headerName: 'Template Type',
              //     field: 'preTenancyTemplateTypeDesc',
              //     sortable: true,
              //     width: 100,
              //   },
              //   {
              //     headerName: 'Is Standard Template?',
              //     field: 'isStandardTemplate',
              //     sortable: true,
              //     width: 100,
              //   },
              // ] as any,
              columnDefs: [
                {
                  headerName: 'Agent Id',
                  field: 'id',
                  sortable: true,
                  width: 100,
                },
                {
                  headerName: 'Agent Name',
                  field: 'name',
                  sortable: true,
                  width: 100,
                }
               
              ] as any,
              
            },
          },
        ],
      },
    ]
  }

  viewDetails(dataItem:any){  }

  public getData(): Observable<any[]> {
    debugger
    const mock: any[] = [
      { id: 1, name: 'Hemant Bishwa' },
      { id: 2, name: 'Krishna Singh' },
      { id: 3, name: 'Radha' },
      { id: 4, name: 'Jai Jai' },
      { id: 5, name: 'Neha Saraff' },
    ];
    console.log(mock);
    
    return of(mock);
  }
}
