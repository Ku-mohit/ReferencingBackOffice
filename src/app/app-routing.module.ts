import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features-module/application/dashboard/dashboard.component';
import { EmployerDetailsComponent } from './features-module/employer/employer-details/employer-details.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features-module/features-module.module').then(m => m.FeaturesModuleModule)
  },
  { path: '', redirectTo: '/features-module/application/dashboard', pathMatch: 'full' },
  { path: './features-module/employer/employer-details', component: EmployerDetailsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
