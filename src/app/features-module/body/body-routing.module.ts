import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAppComponent } from './body-app/body-app.component';

const routes: Routes = [
  {path:'body', component: BodyAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
