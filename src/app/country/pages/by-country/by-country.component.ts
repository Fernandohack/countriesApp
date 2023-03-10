import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
        li {
          cursor: pointer;
        }
    `
  ]
})
export class ByCountryComponent {

  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  public countriesSuggestions: Country[] = [];
  public showSuggestion: boolean = false;
  constructor(private _countryService: CountryService) {
  }

  public searchByCountry(term: string): void {
    this.isError = false;
    this.showSuggestion = false;
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

  suggetions(term: string) {
    this.isError = false;
    this.showSuggestion = true;
    this.term = term;
    this._countryService.searchCountry(term)
      .subscribe(countries => this.countriesSuggestions = countries.splice(0,5),
        (error) => this.countriesSuggestions = []
      );
  }

  searchSuggestion(term: string) {
    this.searchByCountry(term);
  }
}
