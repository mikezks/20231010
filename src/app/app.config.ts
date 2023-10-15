import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { NextFlightsModule } from './next-flights/next-flights.module';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES,
      withComponentInputBinding()
    ),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule)
  ]
};
