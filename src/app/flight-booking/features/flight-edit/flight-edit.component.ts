import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, finalize, map, switchMap, tap } from 'rxjs';
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
export class FlightEditComponent implements OnInit {
  private flightService = inject(FlightService);
  private route = inject(ActivatedRoute);

  @Input({ transform: numberAttribute }) id = 0;
  @Input({ transform: booleanAttribute }) showDetails = false;

  flight = initFlight;

  ngOnInit(): void {
    this.flightService.findById(this.id).subscribe(
      flight => this.flight = flight
    );
  }
}
