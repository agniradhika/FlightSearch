import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFlights } from './flights';
import {ICities} from './cities'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
 private _url: string ="/assets/data/flights.json";
 private _url_cities: string ="/assets/data/airports.json";
  constructor(private http : HttpClient) { }
  getFlightsData():Observable<IFlights[]> {
    return this.http.get<IFlights[]>(this._url);  
  } 
  getCityData():Observable<ICities[]>{
    return this.http.get<ICities[]>(this._url_cities);  

  }
}
