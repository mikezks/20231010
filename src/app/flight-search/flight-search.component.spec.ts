import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPipe, NgFor } from '@angular/common';
import { Component, Input, Output, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EMPTY, Observable, of } from 'rxjs';
import { initFlight } from '../model/flight';
import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from './flight.service';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  const flights = [{
    id: 999,
    from: 'Graz',
    to: 'Paris',
    date: new Date().toISOString(),
    delayed: false
  }];

  const FlightServiceMock = {
    find: () => of(flights)
  };

  const provideFlightServiceMock = () => ({ provide: FlightService, useValue: FlightServiceMock });

  @Pipe({ name: 'city', standalone: true }) class CityPipeMock {
    transform(value: string) { return value; }
  }

  @Component({ selector: 'app-flight-card', standalone: true, template: '' }) class FlightCardComponentMock {
    @Input() item = initFlight;
    @Input() selected = false;
    @Output() selectedChange: Observable<boolean> = EMPTY;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // Framework dependencies
        NgFor, JsonPipe,
        FormsModule,
        // App dependencies
        CityPipeMock,
        FlightCardComponentMock,
        // Component under test
        FlightSearchComponent
      ],
      providers: [
        // App dependencies
        provideFlightServiceMock()
      ]
    });
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have one flight loaded', () => {
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    expect(component.flights.length).toBe(1);
  });
});
