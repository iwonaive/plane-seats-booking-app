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

  getTickets(
    location: City,
    departureDate: Date,
    destination: City,
    arrivalDate: Date
  ): Ticket[] {
    const tickets: Ticket[] = [];
    const ticketsCount = this.getRandomIntByMinMax(
      this.MAX_TICKETS_PER_SEARCH,
      1
    );

    for (let index = 0; index < ticketsCount; index++) {
      tickets.push({
        flightFrom: new Flight(
          arrivalDate,
          this.getRandomIntByMinMax(this.MAX_TIME_PER_FLIGHT, 1),
          this.getRandomIntByMinMax(this.MAX_PRICE_PER_FLIGHT, 1),
          this.getRandomAirline(),
          location,
          destination
        ),
        flightTo: new Flight(
          departureDate,
          this.getRandomIntByMinMax(this.MAX_TIME_PER_FLIGHT, 1),
          this.getRandomIntByMinMax(this.MAX_PRICE_PER_FLIGHT, 1),
          this.getRandomAirline(),
          destination,
          location
        ),
      });
    }

    return tickets;
  }

  private getRandomAirline() {
    const values = Object.values(Airline);
    return values[this.getRandomIntByMax(values.length)];
  }

  private getRandomIntByMinMax(max: number, min: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomIntByMax(max: number) {
    return Math.floor(Math.random() * max);
  }
}
