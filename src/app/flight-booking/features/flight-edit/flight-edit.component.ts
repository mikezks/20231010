import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Flight, initFlight } from '../../../model/flight';
import { ValidationErrorsComponent } from '../../../shared/validation/validation-errors/validation-errors.component';
import { FlightService } from '../../data-access/flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, ValidationErrorsComponent],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private flightService = inject(FlightService);
  private route = inject(ActivatedRoute);

  id = 0;
  showDetails = false;

  /*
    Alternative:
    type FlightData = { flight: Flight };
    data = inject<FlightData>(MAT_DIALOG_DATA);
  */

  flight = initFlight;

  constructor() {
    this.route.paramMap.subscribe(
      params => {
        this.id = +(params.get('id') || 0);
        this.showDetails = params.get('showDetails') === 'true';

        this.flightService.findById(this.id).subscribe(
          flight => this.flight = flight
        );
      }
    )
  }
}
