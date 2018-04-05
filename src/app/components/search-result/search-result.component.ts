import { Component, Input } from '@angular/core';

import { Address } from './../../types/address.type';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  @Input() address: Address;
}
