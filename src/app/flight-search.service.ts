import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFlights } from './flights';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
 private _url: string ="/assets/data/flights.json";
  constructor(private http : HttpClient) { }
  getFlightsData():Observable<IFlights[]> {
    return this.http.get<IFlights[]>(this._url);  
  } 
}
