import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DisplayFlightDetailsComponent } from './display-flight-details/display-flight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    DisplayFlightDetailsComponent,
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[TabsModule]
})
export class AppModule { }
