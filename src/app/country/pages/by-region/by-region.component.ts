import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class ByRegionComponent {

  public regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  public countries: Country[] = [];
  public regionCurrent: string = '';
  constructor(private _countryService: CountryService) { }

  public getClassCss(region: string): string {
    return (region == this.regionCurrent) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
 activeRegion(region: string) {
    if (region == this.regionCurrent){return;}

    this.regionCurrent = region;
    this.countries = [];

    this._countryService.searchCountriesByRegion(region)
      .subscribe( countries => this.countries = countries);
 }

}
