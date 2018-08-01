import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  public myDepartureStartDateValue: Date;
  public myReturnStartDateValue: Date;
  public myReturnEndDateValue: Date;
  origin;
  destination;
  passengernumber;
  flightData;
  flightDetails;
  cityDetails;
 @Output()  public childEvent = new EventEmitter();
  constructor(private _flightService : FlightSearchService) { }

  ngOnInit() {
    this._flightService.getCityData()
    .subscribe((data)=>{
      this.cityDetails = data;
    });
  }
  onDateChange(newStartDate: Date) {
    console.log(newStartDate);
  }
  onEndDateChange(newEndDate: Date) {
    console.log(newEndDate);
  }
  
  checkDetailsOneway(){
    this.flightData={
      originC: this.origin,
      destinationC: this.destination,
      myDepartureStartDateValue : this.myDepartureStartDateValue,
      passengernumber : this.passengernumber
    }
    this.childEvent.emit(this.flightData);
  }

  checkDetailsReturn(){
    console.log("Return");
    this.flightData={
      originC: this.origin,
      destinationC: this.destination,
      myReturnStartDateValue : this.myReturnStartDateValue,
      myReturnEndDateValue:this.myReturnEndDateValue,
      passengernumber : this.passengernumber
    }
    this.childEvent.emit(this.flightData);
  }
  
}
