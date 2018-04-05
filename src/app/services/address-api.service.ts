import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { AddressApiResponse, Address } from './../types/address.type';

@Injectable()
export class AddressApiService {
  constructor(private http: HttpClient) {}

  fetchAddress(postCode: number): Observable<Address> {
    const URL = `http://api.zipaddress.net/?zipcode=${postCode}`;

    return this.http.get<AddressApiResponse>(URL).pipe(map(this.httpHandler));
  }

  // handling errors and normal data.
  private httpHandler(result: AddressApiResponse): Address {
    if (result.code === 200) {
      return result.data;
    } else if (result.code === 404) {
      throw result.message;
    }
  }
}
