export interface AddressApiResponse {
  code: number;
  data: Address;
  message?: string;
}

export interface Address {
  pref: string;
  address: string;
  city: string;
  town: string;
  fullAddress: string;
}
