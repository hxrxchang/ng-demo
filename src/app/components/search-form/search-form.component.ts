import { Component, OnInit } from '@angular/core';

import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  postCode = 1600022;
  addressData;

  constructor(private addressApiService: AddressApiService) {}

  ngOnInit() {}

  onClickFetchAddress() {
    this.addressApiService.fetchAddress(this.postCode).subscribe((res) => {
      this.addressData = res.data.fullAddress;
    });
  }
}
