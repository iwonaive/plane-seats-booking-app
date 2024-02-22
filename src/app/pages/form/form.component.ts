import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';
import { CityCode } from 'src/app/enums/city-code.enum';
import { City } from 'src/app/interfaces/city.interface';
import { FlightSearchForm } from 'src/app/interfaces/flight-search-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  flightSearchForm: FormGroup<FlightSearchForm> = this.fb.group({
    location: this.fb.control(null, [Validators.required]),
    destination: this.fb.control(null),
    departureDate: this.fb.control(new Date(), [Validators.required]),
    returnDate: this.fb.control(null),
    passengers: this.fb.control(1),
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
  minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  checkDate() {
    if (
      this.flightSearchForm.value.departureDate &&
      this.flightSearchForm.value.returnDate &&
      this.flightSearchForm.value.returnDate.getTime() <
        this.flightSearchForm.value.departureDate.getTime()
    ) {
      this.flightSearchForm.controls.returnDate.setValue(null);
    }
  }
  checkCity() {
    if (
      this.flightSearchForm.value.location.code ===
      this.flightSearchForm.value.destination.code
    ) {
      this.flightSearchForm.controls['destination'].setErrors({
        incorrectLocation: true,
      });
    }
  }

  navigateToList() {
    this.router.navigateByUrl('list')
  }
}
