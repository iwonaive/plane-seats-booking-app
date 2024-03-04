import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Airline } from '../enums/airline.enum';
import { City } from '../interfaces/city.interface';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly MAX_TICKETS_PER_SEARCH = 24;
  private readonly MAX_TIME_PER_FLIGHT = 16;
  private readonly MAX_PRICE_PER_FLIGHT = 2000;

  getTickets(location: City, departureDate: Date, destination: City, arrivalDate: Date): Ticket[] {
    const tickets: Ticket[] = [];
    const ticketsCount = this.getRandomInt(this.MAX_TICKETS_PER_SEARCH);

    for (let index = 0; index < ticketsCount; index++) {
      tickets.push(
        {
          flightTo: new Flight(
            departureDate,
            this.getRandomInt(this.MAX_TIME_PER_FLIGHT),
            this.getRandomInt(this.MAX_PRICE_PER_FLIGHT),
            this.getRandomAirline(),
            location,
            destination,
          ),
          flightFrom: new Flight(
            arrivalDate,
            this.getRandomInt(this.MAX_TIME_PER_FLIGHT),
            this.getRandomInt(this.MAX_PRICE_PER_FLIGHT),
            this.getRandomAirline(),
            destination,
            location
          )
        }
      )
    }

    return tickets;
  }

  private getRandomAirline() {
    const values = Object.values(Airline);
    return values[this.getRandomInt(values.length)];
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
