import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeRoutingModule } from './trainee-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TraineeRoutingModule,
    SharedModule
  ]
})
export class TraineeModule { }
