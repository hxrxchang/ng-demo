import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AddressApiService } from './services/address-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'postcode finder';
  constructor(private addressApiService: AddressApiService) {}

  ngOninit() {
    // this.addressApiService.fetchAddress();
  }

  onClickFetchAddress() {
    console.log('!!!!!!!!!!!!!!!!!!!');
  }
}
