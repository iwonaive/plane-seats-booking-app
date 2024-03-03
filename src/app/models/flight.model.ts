import { Airline } from '../enums/airline.enum';
import { City } from '../interfaces/city.interface';

export class Flight {
  departureDate: Date;
  arrivalDate: Date;
  price: number;
  airline: Airline;
  location: City;
  destination: City;

  constructor() {}
}
