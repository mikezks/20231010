import { Routes } from "@angular/router";
import { HomeComponent } from "../core/features/home/home.component";
import { AboutComponent } from "../core/features/about/about.component";
import { NotFoundComponent } from "../shared/features/not-found/not-found.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";


export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'flight-search',
    pathMatch: 'full'
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];