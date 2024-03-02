import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightSearchValue } from 'src/app/interfaces/flight-search-value.interface';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public searchValue: FlightSearchValue;
  ticket: any;

  constructor(private route: ActivatedRoute, ticketService: TicketService) {
    
    this.ticket = ticketService.getTickets();}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['data']) {
        this.searchValue = JSON.parse(params['data']);
        console.log(this.searchValue);
      }

      
    });
  }
}
