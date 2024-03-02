import { Flight } from '../models/flight.model';

export class Ticket {
  flightTo: {
    departureDate: '03.03.2024.';
    arrivalDate: '03.03.2024.';
    price: 999;
    airline: 'Lot';
    location: 'Warsaw';
    destination: 'Katowice';
  };
  flightFrom: {
    departureDate: '04.03.2024.';
    arrivalDate: '04.03.2024.';
    price: 899;
    airline: 'Lot';
    location: 'Katowice';
    destination: 'Warsaw';
  };

  constructor() {}
}

export class Ticket2 {
  flightTo: {
    departureDate: '05.03.2024.';
    arrivalDate: '05.03.2024.';
    price: 899;
    airline: 'Wizz Air';
    location: 'Paris';
    destination: 'London';
  };
  flightFrom: {
    departureDate: '06.03.2024.';
    arrivalDate: '06.03.2024.';
    price: 799;
    airline: 'Wizz Air';
    location: 'London';
    destination: 'Paris';
  };

  constructor() {}
}

export class Ticket3 {
  flightTo: {
    departureDate: '10.03.2024.';
    arrivalDate: '10.03.2024.';
    price: 799;
    airline: 'Wizz Air';
    location: 'Warsaw';
    destination: 'Rome';
  };
  flightFrom: {
    departureDate: '13.03.2024.';
    arrivalDate: '13.03.2024.';
    price: 599;
    airline: 'Ryanair';
    location: 'Rome';
    destination: 'Warsaw';
  };

  constructor() {}
}
