import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];

  constructor(private _countryService: CountryService) { }

  searchByCapital(term: string): void {
    this.isError = false;
    this.term = term;
    this._countryService.searchCapital(this.term)
      .subscribe(capitals => {
          this.countries = capitals;
          console.log(capitals);
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
