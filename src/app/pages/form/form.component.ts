import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface City {
    name: string;
  //   code: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  userForm = this.fb.group({
    location: ['', Validators.required],
    destination: [''],
    selectedCity: [''],
    departureDate: [''],
    returnDate: [''],
    passenger: [''],

  });
  citiesFrom: any[] | undefined;
  citiesTo: any[] | undefined;
    passenger: any[] | undefined;

  constructor(private fb: FormBuilder) {}

// departureDate: Date = new Date();
//   returnDate: Date = new Date();


  ngOnInit() {
    this.citiesFrom = [
      { name: 'New York, USA' },
      { name: 'Rome, Italy' },
      { name: 'London, UK' },
      { name: 'Warsaw, Poland' },
    ];

    this.citiesTo = [
      { name: 'Paris, France' },
      { name: 'Alaska, USA' },
      { name: 'Katowice, Poland' },
      { name: 'Barcelona, Spain' },
    ];

    this.passenger = [
        { name: '1 passenger'},
        { name: '2 passengers'},
        { name: '3 passengers'},
        { name: '4 passengers'},
        { name: '5 passengers'},
        { name: '6 passengers'},
        { name: '7 passengers'},
        { name: '8 passengers'},
        { name: '9 passengers'},
        { name: '10 passenges'},
    ];
   
    }
    }

// items: SelectItem[];
// item: string;

//  constructor() {
//         this.items = [];
//         for (let i = 0; i < 10000; i++) {
//             this.items.push({label: 'Item ' + i, value: 'Item ' + i});
//         }
