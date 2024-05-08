import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesDetailsComponent } from './properties-details/properties-details.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  {
    path:'properties-details',
    component:PropertiesDetailsComponent
  },
  {
    path:'properties-details/record',
    component:RecordComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
