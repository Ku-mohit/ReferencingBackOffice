import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { RecordComponent } from '../properties/record/record.component';
import { TestcpmComponent } from './testcpm/testcpm.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
   path:'application-details',component:ApplicationDetailsComponent
  },
  {
   path:'testcpm',component:TestcpmComponent
  },
  {
   path:'application-details/record',component:RecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ApplicationRoutingModule { }
