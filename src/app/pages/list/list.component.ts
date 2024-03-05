import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightSearchValue } from 'src/app/interfaces/flight-search-value.interface';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public searchValue: FlightSearchValue;
  public tickets: Ticket[];

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['data']) {
        this.searchValue = JSON.parse(params['data']);
        console.log(this.searchValue);
        this.tickets = this.ticketService.getTickets(
          this.searchValue.location,
          this.searchValue.departureDate,
          this.searchValue.destination,
          this.searchValue.returnDate
        );
        console.log(this.tickets);
      }
    });
  }

  navigateToForm() {
    this.router.navigate(['/form']);
  }
}
