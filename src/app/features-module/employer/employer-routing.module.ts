import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerModule } from './employer.module';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

const routes: Routes = [
  { path: 'employer-details', component: EmployerDetailsComponent },
  { path: 'employer-details/company-info', component: CompanyInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerRoutingModule {}
