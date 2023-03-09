import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.com/v2';
  constructor(private _http: HttpClient) { }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${term}`;
    return this._http.get<Country[]>(url);
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${term}`;
    return this._http.get<Country[]>(url);
  }

  public getCountry(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

}
