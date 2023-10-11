import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { initialFlight } from '../model/flight';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy {
  @Input() item = initialFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('INIT', { flight: this.item, selected: this.selected });
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  ngOnDestroy(): void {
    console.log('DESTROYED CARD ' + this.item.id);
  }
}
