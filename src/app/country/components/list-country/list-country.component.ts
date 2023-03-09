import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styles: [
  ]
})
export class ListCountryComponent implements OnInit {
  @Input() countries: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
