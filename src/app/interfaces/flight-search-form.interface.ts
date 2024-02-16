import { FormControl } from "@angular/forms";
import { City } from "./city.interface";

export interface FlightSearchForm {
  location: FormControl<City | null>;
  destination: FormControl<City | null>;
  departureDate: FormControl<Date | null>;
  returnDate: FormControl<Date | null>;
  passengers: FormControl<number | null>;
}
