import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to };

    return this.http.get<Flight[]>(url, { headers, params }).pipe(
      tap(() => console.log('FlightService is used!'))
    );
  }
}
