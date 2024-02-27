import { City } from "./city.interface";

export interface FlightSearchValue {
  location: City;
  destination: City;
  departureDate: Date;
  returnDate: Date;
  passengers: number;
}
