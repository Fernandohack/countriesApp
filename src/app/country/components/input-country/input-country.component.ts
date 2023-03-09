import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [
  ]
})
export class InputCountryComponent implements OnInit{
  @Output() onInputCountry: EventEmitter<string> = new EventEmitter();
  @Output() onDebouce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject<string>();

  public term: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
      this.onDebouce.emit(value);
    })
  }

  public search(): void {
    this.onInputCountry.emit(this.term);
  }

  pressKey(event: Event) {
    this.debouncer.next(this.term);
  }
}
