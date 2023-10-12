import { inject } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { HomeComponent } from "../core/features/home/home.component";
import { AboutComponent } from "../core/features/about/about.component";
import { NotFoundComponent } from "../shared/features/not-found/not-found.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";
import { FlightEditComponent } from "./features/flight-edit/flight-edit.component";
import { FlightService } from './data-access/flight.service';
import { DummyFlightService } from './data-access/dummy-flight.service';


const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    providers: [
      {
        provide: FlightService,
        useClass: DummyFlightService
      }
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent,
        canMatch: [
          () => {
            inject(Router).createUrlTree(['/flight-booking/passenger-search']);
          }
        ]
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

export default FLIGHT_BOOKING_ROUTES;
