import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { initFlight } from '../../../model/flight';
import { ValidationErrorsComponent } from '../../../shared/validation/validation-errors/validation-errors.component';
import { FlightService } from '../../data-access/flight.service';

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
  flight = initFlight;

  constructor() {
    this.route.paramMap.pipe(
      // Create local state w/ correct typing
      map(params => ({
        id: +(params.get('id') || 0),
        showDetails: params.get('showDetails') === 'true'
      })),
      // Set class props based on state
      tap(({id, showDetails}) => {
        this.id = id;
        this.showDetails = showDetails;
      }),
      // Map to ID
      map(({id}) => id),
      // Filter same IDs
      distinctUntilChanged(),
      // Load Flights based on ID
      switchMap(id => this.flightService.findById(this.id))
    ).subscribe(
      // Set flights class prop
      flight => this.flight = flight
    );
  }
}
