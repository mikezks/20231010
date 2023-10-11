import { NextFlightsModule } from './next-flights/next-flights.module';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(NextFlightsModule)
  ]
};
