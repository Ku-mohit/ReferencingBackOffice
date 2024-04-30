import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesDetailsComponent } from './properties-details/properties-details.component';

const routes: Routes = [
  {
    path:'properties-details',
    component:PropertiesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
