import { TestBed, inject } from '@angular/core/testing';

import { AddressApiService } from './address-api.service';

describe('AddressApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressApiService],
    });
  });

  it(
    'should be created',
    inject([AddressApiService], (service: AddressApiService) => {
      expect(service).toBeTruthy();
    }),
  );
});
