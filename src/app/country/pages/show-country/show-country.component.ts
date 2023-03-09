import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country.service";
import {count, switchMap, tap} from "rxjs/operators";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  public country!: Country;
  constructor(private _activatedRoute: ActivatedRoute, private _countryService: CountryService) { }

  ngOnInit(): void {
    /*this._activatedRoute.params

      .subscribe( ({id}) => {

        this._countryService.getCountry(id)
          .subscribe( country => {
            console.log(country);
          });
      });*/

    this._activatedRoute.params
      .pipe(
        switchMap((param) => this._countryService.getCountry(param.id)),
        tap(console.log) // I can put resp => console.log(resp)
      )
      .subscribe( country => this.country = country);
  }

  protected readonly count = count;
}
