import { Component, OnInit, Input } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'display-flight-details',
  templateUrl: './display-flight-details.component.html',
  styleUrls: ['./display-flight-details.component.css']
})
export class DisplayFlightDetailsComponent implements OnInit {
public flightDetails = [];
public headercontainer = false;
originC;
destinationC;
myDepartureStartDateValue;
myReturnStartDateValue;
myReturnEndDateValue
passengernumber;
data;
from;
to;
date;
price;
seats;
@Input('parentData') public flightsData;
public flightDetailsTemp;
  constructor(private _flightService : FlightSearchService) { }

  ngOnInit() {
    console.log("This is display component",this.flightsData);
    this._flightService.getFlightsData()
    .subscribe((data)=>{
       this.flightDetails = data;
       this.compare();
      });

  }
compare(){
  console.log(this.flightDetails);
  console.log(this.flightsData);
}

}
