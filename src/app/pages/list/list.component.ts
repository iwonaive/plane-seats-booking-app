import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightSearchValue } from 'src/app/interfaces/flight-search-value.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public searchValue: FlightSearchValue;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['data']) {
        this.searchValue = JSON.parse(params['data']);
        console.log(this.searchValue);
      }
    });
  }
}
