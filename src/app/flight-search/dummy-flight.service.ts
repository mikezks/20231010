import { Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  find(): Observable<Flight[]> {
    const flights = [
      {
        id: 999,
        from: 'Madrid',
        to: 'Barcelona',
        date: new Date().toISOString(),
        delayed: false
      }
    ];

    return of(flights).pipe(
      tap(() => console.log('FlightService Token is used with implementation DummyFlightService!'))
    );
  }
}
