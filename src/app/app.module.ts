import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DisplayFlightDetailsComponent } from './display-flight-details/display-flight-details.component';
import { FlightSearchService } from './flight-search.service';
import { FilterFlightsPipe } from './filter-flights.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    DisplayFlightDetailsComponent,
    FilterFlightsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [FlightSearchService],
  bootstrap: [AppComponent],
  exports:[TabsModule]
})
export class AppModule { }
