import { Injectable } from '@angular/core';
import { Ticket } from '.././app/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getTickets(): Ticket[] {
    return [new Ticket(), new Ticket()];
  }
}
