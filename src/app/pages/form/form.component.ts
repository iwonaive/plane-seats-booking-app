import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
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
    passengers: [''],
  });

  cities: City[] = [
    { name: 'New York, USA', code: 'JFK' },
    { name: 'Rome, Italy', code: 'FCO' },
    { name: 'London, UK', code: 'LCY' },
    { name: 'Warsaw, Poland', code: 'WAW' },
    { name: 'Paris, France', code: 'PAR' },
    { name: 'Ottawa, CAN', code: 'YOW' },
    { name: 'Katowice, Poland', code: 'KTW' },
    { name: 'Barcelona, Spain', code: 'BCN' },
  ];

  passengers: number[] = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private fb: FormBuilder) {}
  ;

}
