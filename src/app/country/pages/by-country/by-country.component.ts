import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: []
})
export class ByCountryComponent {

  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor(private _countryService: CountryService) {
  }

  public searchByCountry(term: string): void {
    this.isError = false;
    this.term = term;
    this._countryService.searchCountry(this.term)
      .subscribe(countries => {
          this.countries = countries;
          console.log(countries);
        },
        (error) => {
          this.isError = true;
          this.countries = [];
          console.log(error);
        });
  }

  suggetions($event: string) {
    this.isError = false;
    //TODO: create suggestion
  }
}
