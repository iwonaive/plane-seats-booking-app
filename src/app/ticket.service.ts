import { Injectable } from '@angular/core';
import { Ticket } from '.././app/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getTickets(): Ticket[] {
    [
      {
        flightTo: {
          departureDate: '03.03.2024.',
          arrivalDate: '03.03.2024.',
          price: 999,
          airline: 'Lot',
          location: 'Warsaw',
          destination: 'Katowice',
        },
        flightFrom: {
          departureDate: '04.03.2024.',
          arrivalDate: '04.03.2024.',
          price: 899,
          airline: 'Lot',
          location: 'Katowice',
          destination: 'Warsaw',
        },
      },
      {
        flightTo: {
          departureDate: '04.03.2024.',
          arrivalDate: '04.03.2024.',
          price: 899,
          airline: 'Ryanair',
          location: 'Warsaw',
          destination: 'Paris',
        },
        flightFrom: {
          departureDate: '05.03.2024.',
          arrivalDate: '05.03.2024.',
          price: 799,
          airline: 'Ryanair',
          location: 'Paris',
          destination: 'Warsaw',
        },
      },
      {
        flightTo: {
          departureDate: '08.03.2024.',
          arrivalDate: '08.03.2024.',
          price: 699,
          airline: 'Wizz Air',
          location: 'Rome',
          destination: 'Warsaw',
        },
        flightFrom: {
          departureDate: '09.03.2024.',
          arrivalDate: '09.03.2024.',
          price: 599,
          airline: 'Wizz Air',
          location: 'Warsaw',
          destination: 'Rome',
        },
      },
    ];
    return [new Ticket(), new Ticket()];
  }
}
