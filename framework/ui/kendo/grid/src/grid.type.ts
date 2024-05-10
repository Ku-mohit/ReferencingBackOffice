import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import {
  DataBindingDirective,
  DataStateChangeEvent,
  GridComponent,
} from '@progress/kendo-angular-grid';
import { SortDescriptor, State, process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { Observable } from 'rxjs';
import { GridDataService } from './grid-data-service';
@Component({
  selector: 'formly-field-grid',
  template: `
    <div class="col-md-12 custom-grid-plus rg-policy-search-grid">
      <kendo-grid
        *ngIf="!field?.gridOptions.serverRendering"
        #kendoGrid
        [kendoGridBinding]="field?.gridOptions.data | async"
        [pageable]="field?.gridOptions?.pageable"
        [pageSize]="field?.gridOptions?.pageSize"
        [sortable]="field?.gridOptions?.sorting"
        scrollable="none"
      >
        <ng-template
          kendoGridToolbarTemplate
          *ngIf="field?.gridOptions?.searchall"
        >
          <div class="form-row align-items-center w-100 py-2">
            <div class="col-md m-top-10">
              <input
                placeholder="Search in all columns..."
                kendoTextBox
                class="form-control w-100"
                (input)="onFilter()"
                [(ngModel)]="searchText"
              />
            </div>
          </div>
          <div
            class="col-md-auto m-top-10"
            *ngIf="field?.gridOptions?.exportToExcel"
          >
            <button
              kendoGridExcelCommand
              type="button"
              class="m-w-100"
              icon="file-excel"
            >
              Export to Excel
            </button>
          </div>
          <div
            class="col-md-auto m-top-10 mr-2"
            *ngIf="field?.gridOptions?.exportToPdf"
          >
            <button kendoGridPDFCommand icon="file-pdf" class="m-w-100">
              Export to PDF
            </button>
          </div>
        </ng-template>
        <kendo-grid-column
          *ngFor="let item of field?.gridOptions?.columnDefs"
          field="{{ item.field }}"
          title="{{ item.headerName }}"
          

          
        >
        
        
      </kendo-grid-column>

        <kendo-grid-command-column
          title="Action"
          [width]="160"
          *ngIf="field?.gridOptions?.actionButton"
        >
          <ng-template
            kendoGridCellTemplate
            let-isNew="isNew"
            let-dataItem
            *ngFor="let item of field?.gridOptions?.actionDetails; index as i"
          >
            <button
              [type]="item.type"
              [ngClass]="'btn btn-' + item.props.btnType"
              (click)="onClick($event, i, dataItem)"
            >
              {{ item.props.text }}
            </button>
          </ng-template>
        </kendo-grid-command-column>

        <kendo-grid-pdf
          fileName="{{ field?.gridOptions?.fileName }}"
          [allPages]="true"
          [repeatHeaders]="true"
          [scale]="0.8"
          [repeatHeaders]="true"
          [margin]="{ top: '1cm', left: '1cm', right: '1cm', bottom: '1cm' }"
          *ngIf="field?.gridOptions?.exportToPdf"
        >
        </kendo-grid-pdf>
        <kendo-grid-excel
          fileName="{{ field?.gridOptions?.fileName }}"
          *ngIf="field?.gridOptions?.exportToExcel"
        >
        </kendo-grid-excel>
      </kendo-grid>

      <kendo-grid
        *ngIf="field?.gridOptions.serverRendering"
        autoFitColumns="true"
        [data]="dataSource | async"
        [pageSize]="state.take"
        [skip]="state.skip"
        [sort]="state.sort"
        [sortable]="true"
        [pageable]="true"
        [scrollable]="'scrollable'"
        (dataStateChange)="dataStateChange($event)"
      >
        <ng-template
          kendoGridToolbarTemplate
          *ngIf="field?.gridOptions?.searchall"
        >
          <div class="form-row align-items-center w-100 py-2">
            <div class="col-md m-top-10">
              <input
                placeholder="Search in all columns..."
                kendoTextBox
                class="form-control w-100"
                (input)="filterData()"
                [(ngModel)]="searchText"
              />
            </div>
          </div>
          <div
            class="col-md-auto m-top-10"
            *ngIf="field?.gridOptions?.exportToExcel"
          >
            <button
              kendoGridExcelCommand
              type="button"
              class="m-w-100"
              icon="file-excel"
            >
              Export to Excel
            </button>
          </div>
          <div
            class="col-md-auto m-top-10 mr-2"
            *ngIf="field?.gridOptions?.exportToPdf"
          >
            <button kendoGridPDFCommand icon="file-pdf" class="m-w-100">
              Export to PDF
            </button>
          </div>
        </ng-template>
        <kendo-grid-column
          *ngFor="let item of field?.gridOptions?.columnDefs; index as i"
          field="{{ item.field }}"
          title="{{ item.headerName }}"
          
        >
        <ng-template kendoGridCellTemplate  
            let-dataItem *ngIf="isDateValue(item.field)">
            
            {{    dataItem[item.field]  | date: "dd/MM/yyyy" }}
          </ng-template>
      </kendo-grid-column>

        <kendo-grid-command-column
          title="Action"
          [width]="160"
          *ngIf="field?.gridOptions?.actionButton"
        >
          <ng-template
            kendoGridCellTemplate
            let-isNew="isNew"
            let-dataItem
            *ngFor="let item of field?.gridOptions?.actionDetails; index as i"
          >
            <button
              [type]="item.type"
              [ngClass]="'btn btn-' + item.props.btnType"
              (click)="onClick($event, i, dataItem)"
            >
              {{ item.props.text }}
            </button>
          </ng-template>
        </kendo-grid-command-column>

        <kendo-grid-pdf
          fileName="{{ field?.gridOptions?.fileName }}"
          [allPages]="true"
          [repeatHeaders]="true"
          [scale]="0.8"
          [repeatHeaders]="true"
          [margin]="{ top: '1cm', left: '1cm', right: '1cm', bottom: '1cm' }"
          *ngIf="field?.gridOptions?.exportToPdf"
        >
        </kendo-grid-pdf>
        <kendo-grid-excel
          fileName="{{ field?.gridOptions?.fileName }}"
          *ngIf="field?.gridOptions?.exportToExcel"
        >
        </kendo-grid-excel>
      </kendo-grid>
    </div>
  `,
  styles : `
  .rg-policy-search-grid {
  .k-grid-content {
    height: calc(100vh - 270px);
  }
}
`
})
export class GridTypeComponent extends FieldArrayType implements OnInit {
  style: any = {};
  searchText = '';
  @ViewChild('kendoGrid', { static: false })
  kendoGrid: GridComponent;
  gridDataClone: [];
  results: [];
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

  public dataSource: Observable<any>;
  public sort: SortDescriptor[] = [];

  public state: State = {
    skip: 0,
    take: 5,
    filter: { filters: [], logic: 'or' },
  };

  constructor(private dataService: GridDataService) {
    super();
  }

  ngOnInit() {
    this.style = {
      width: this.props.width,
      height: this.props.height,
    };
    if (this.field.gridOptions.serverRendering) {
      this.dataSource = this.dataService;
      
      this.dataService.read('', '', this.field.gridOptions.apiEndPoint);
    } else {
      this.field.gridOptions?.data.subscribe((data: any): void => {
        this.gridDataClone = data;
      });
    }
  }

  isDateValue(column:any) : boolean{
    if(column.toString().toLowerCase().includes('date')) {
      return true;
    }
    return false;
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    if (this.searchText.length > 2) {
      this.dataService.state = state;
      this.state = state;
      this.filterData(true);
    } else {
      this.dataService.state = state;
      this.state = state;
      this.dataService.read('', '', this.field.gridOptions.apiEndPoint);
      //this.refreshTotalCount();

      

    }
  }

  filterData(isfromstatechange: Boolean = false) {
    if (!isfromstatechange) {
      this.dataService.state.skip = 0;
      this.dataService.state.take = 5;
    }

    if (this.searchText.length > 2) {
      //this.dataService.state.sort = [];
      this.dataService.read(
         'search',
        this.searchText,
        this.field.gridOptions.apiEndPoint,
        this.state
      );
      //this.refreshTotalCount();
    } else if (this.searchText.length === 0) {
      this.dataService.state.skip = 0;
      this.dataService.state.take = 5;
      this.dataService.read(
        'search',
       this.searchText,
       this.field.gridOptions.apiEndPoint,
       this.state
     );
      //this.refreshTotalCount();
    }
  }

  allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(this.gridDataClone, {}).data,
    };

    return result;
  }

  onFilter() {
    if (this.searchText.length == 0) {
      this.kendoGrid.data = this.gridDataClone;
      return;
    }

    if (this.searchText.length < 2) return;
    this.results = [];

    this.gridDataClone.forEach((row: any, index: number) => {
      this.field.gridOptions?.columnDefs.forEach((column: any) => {
        if (
          row[column.field]
            .toString()
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
        ) {
          this.results.push(this.gridDataClone[index]);
        }
      });
    });
    this.kendoGrid.data = this.results as any;
    this.dataBinding.skip = 0;

    //this.results.push(r);
  }

  onClick($event: Event, index: number, dataItem: any) {
    if (this.field.gridOptions?.actionDetails[index]?.props?.onClick) {
      //this.props.onClick($event);
      this.field.gridOptions?.actionDetails[index]?.props?.onClick(dataItem);
    }
  }
}
