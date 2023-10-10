import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from "./flight-search/flight-search.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, NavbarComponent, FlightSearchComponent]
})
export class AppComponent {
  protected title = 'Hello Angular!';

  changeTitle(): void {
    this.title = this.title === 'Hello Michael!' ? 'Hello Angular!' : 'Hello Michael!';
  }
}
