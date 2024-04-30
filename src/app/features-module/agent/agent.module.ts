import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentInfoComponent } from './agent-info/agent-info.component';


@NgModule({
  declarations: [
    AgentDetailsComponent,
    AgentInfoComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
