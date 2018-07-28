import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  public myDepartureStartDateValue: Date;
  public myReturnStartDateValue: Date;
  public myReturnEndDateValue: Date;
  constructor() { }

  ngOnInit() {
  }
  onDateChange(newStartDate: Date) {
    console.log(newStartDate);
  }
  onEndDateChange(newEndDate: Date) {
    console.log(newEndDate);
  }
}
