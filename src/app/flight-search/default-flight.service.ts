import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to };

    return this.http.get<Flight[]>(url, { headers, params }).pipe(
      tap(() => console.log('FlightService Token is used with implementation DefaultFlightService!'))
    );
  }
}
