import { Routes } from "@angular/router";
import { AboutComponent } from "./core/features/about/about.component";
import { HomeComponent } from "./core/features/home/home.component";
import { NotFoundComponent } from "./shared/features/not-found/not-found.component";
import { FLIGHT_BOOKING_ROUTES } from "./flight-booking/flight-booking.routes";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  ...FLIGHT_BOOKING_ROUTES,
  {
    path: '**',
    component: NotFoundComponent
  }
];
