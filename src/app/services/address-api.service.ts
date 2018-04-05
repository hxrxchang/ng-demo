import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AddressApiService {

  constructor(private http: HttpClient) { }

  fetchAddress(postCode: number) {
    const URL = `http://api.zipaddress.net/?zipcode=${postCode}`;

    return this.http.get(URL);
  }
}
