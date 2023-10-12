import { inject } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { HomeComponent } from "../core/features/home/home.component";
import { AboutComponent } from "../core/features/about/about.component";
import { NotFoundComponent } from "../shared/features/not-found/not-found.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";
import { FlightEditComponent } from "./features/flight-edit/flight-edit.component";


export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
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
