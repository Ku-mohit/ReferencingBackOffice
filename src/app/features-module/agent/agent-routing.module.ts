import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentInfoComponent } from './agent-info/agent-info.component';

const routes: Routes = [
  { path: 'agent-details', component: AgentDetailsComponent },
  {
    path: 'agent-details/agent-info',
    component: AgentInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
