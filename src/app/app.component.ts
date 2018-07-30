import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'flightSearchApp';
  displayFlightDetailsContainer = false;
  d;

message(e){
  this.d=e;
  console.log("new data",this.d);
  this.displayFlightDetailsContainer = true;
}
}
