import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

import { AddressApiService } from './services/address-api.service';
import { Address } from './types/address.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'postcode finder';
  address: Address;

  // @see https://alligator.io/angular/takeuntil-rxjs-unsubscribe/
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private addressApiService: AddressApiService) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  search(postCode: number): void {
    this.addressApiService
      .fetchAddress(postCode)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => (this.address = res), (e) => window.alert(e));
  }
}
