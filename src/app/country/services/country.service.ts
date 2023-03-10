import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.com/v2';

  get getParams()
  {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private _http: HttpClient) { }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${term}`;
    return this._http.get<Country[]>(url, {params: this.getParams});
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${term}`;
    return this._http.get<Country[]>(url, {params: this.getParams});
  }

  public getCountry(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

  public searchCountriesByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/regionalbloc/${region}`;
    return this._http.get<Country[]>(url, { params: this.getParams });
  }

}
