import { NextFlightsService } from './next-flights.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { CheckinComponent } from "./checkin/checkin.component";


@NgModule({
  imports: [
    CommonModule,
    CheckinComponent
  ],
  declarations: [
    NextFlightsComponent
  ],
  providers: [
    NextFlightsService
  ],
  exports: [
    NextFlightsComponent
  ]
})
export class NextFlightsModule { }
