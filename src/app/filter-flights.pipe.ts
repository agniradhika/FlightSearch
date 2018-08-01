import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFlights'
})
export class FilterFlightsPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
  
if(!args){
  return value;
}else{
  args;
}
return value.filter(flight=>{
  return flight.from.startsWith(args)==true;
})
  }
  }


