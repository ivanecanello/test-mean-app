import {Component, OnInit} from '@angular/core';
import {FlightService} from "./services/flight/flight.service";
import {Flight} from "./models/flight.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(
    private _flightService: FlightService
  ) {
  }

  ngOnInit(): void {
    this.getFlightList();
  }

  getFlightList() {
    this._flightService.getFlightList().subscribe({
      next: (res) => {
        this.flights = res;
        this.selectedFlight = this.flights[0];
      },
      error: console.log,
    });
  }

  changeSelectedFlight(flight: Flight) {
    this.selectedFlight = flight;
  }

}
