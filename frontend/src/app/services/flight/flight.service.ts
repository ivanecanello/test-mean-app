import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Flight} from "../../models/flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private _http: HttpClient) { }

  getFlightList(): Observable<Flight[]> {
    // retrieve hardcoded flights from json file
    return this._http.get<Flight[]>("./assets/flights.json");
  }
}
