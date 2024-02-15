import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CityCode } from 'src/app/enums/city-code.enum';
import { City } from 'src/app/interfaces/city.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  flightSearchForm = this.fb.group({
    location: [null, Validators.required],
    destination: [null],
    departureDate: [null, Validators.required],
    returnDate: [null],
    passengers: [null],
  });

  cities: City[] = [
    { name: 'New York, USA', code: CityCode.newYork },
    { name: 'Rome, Italy', code: CityCode.rome },
    { name: 'London, UK', code: CityCode.london },
    { name: 'Warsaw, Poland', code: CityCode.warsaw },
    { name: 'Paris, France', code: CityCode.paris },
    { name: 'Ottawa, CAN', code: CityCode.ottawa },
    { name: 'Katowice, Poland', code: CityCode.katowice },
    { name: 'Barcelona, Spain', code: CityCode.barcelona },
  ];

  passengers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
form: any;

  constructor(private fb: FormBuilder) {}
}
