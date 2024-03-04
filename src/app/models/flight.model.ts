import { Airline } from '../enums/airline.enum';
import { City } from '../interfaces/city.interface';

export class Flight {
  constructor(
    public date: Date,
    public time: number,
    public price: number,
    public airline: Airline,
    public location: City,
    public destination: City
  ) { }
}
