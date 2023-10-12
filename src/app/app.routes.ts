import { Routes } from "@angular/router";
import { AboutComponent } from "./core/features/about/about.component";
import { HomeComponent } from "./core/features/home/home.component";
import { NotFoundComponent } from "./shared/features/not-found/not-found.component";

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
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.routes')
      .then(esm => esm.FLIGHT_BOOKING_ROUTES)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
