import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerModule } from './employer.module';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';

const routes: Routes = [
  {path:'',component:EmployerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
