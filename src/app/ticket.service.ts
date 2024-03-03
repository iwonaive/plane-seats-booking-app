import { Injectable } from '@angular/core';
import { Ticket } from '.././app/models/ticket.model';
import { Airline } from './enums/airline.enum';
import { CityCode } from './enums/city-code.enum';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getTickets(): Ticket[] {
    return [
      {
        flightTo: {
          departureDate: new Date('03.03.2024'),
          arrivalDate: new Date('03.03.2024'),
          price: 999,
          airline: Airline.lot,
          location: {
            name: 'Warsaw',
            code: CityCode.warsaw,
          },
          destination: {
            name: 'Katowice',
            code: CityCode.katowice,
          },
        },
        flightFrom: {
          departureDate: new Date('04.03.2024'),
          arrivalDate: new Date('04.03.2024'),
          price: 899,
          airline: Airline.ryanair,
          location: {
            name: 'Katowice',
            code: CityCode.katowice,
          },
          destination: {
            name: 'Warsaw',
            code: CityCode.warsaw,
          },
        },
      },
      {
        flightTo: {
          departureDate: new Date('04.03.2024'),
          arrivalDate: new Date('04.03.2024'),
          price: 899,
          airline: Airline.ryanair,
          location: {
            name: 'Warsaw',
            code: CityCode.warsaw,
          },
          destination: {
            name: 'Paris',
            code: CityCode.paris,
          },
        },
        flightFrom: {
          departureDate: new Date('23.03.2024'),
          arrivalDate: new Date('23.03.2024'),
          price: 799,
          airline: Airline.wizzair,
          location: {
            name: 'Paris',
            code: CityCode.paris,
          },
          destination: {
            name: 'Warsaw',
            code: CityCode.warsaw,
          },
        },
      },
    ];
  }
}
