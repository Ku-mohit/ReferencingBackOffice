import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { RecordComponent } from '../properties/record/record.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'app-dashboard',component:DashboardComponent
  },
  {
   path:'app-dashboard/application-details',component:ApplicationDetailsComponent
  },
  {
   path:'app-dashboard/application-details/record',component:RecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ApplicationRoutingModule { }
