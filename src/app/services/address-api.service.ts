import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddressApiService {

  constructor(private http: HttpClient) { }

  fetchAddress() {
    const address = this.http.get('https://api.github.com/users/vsavkin/repos');

    console.log(address);
    return address;
  }
}
