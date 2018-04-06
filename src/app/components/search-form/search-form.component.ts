import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter<number>();
  postCodeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get postCode() {
    return this.postCodeForm.controls['postCode'];
  }

  ngOnInit() {
    this.postCodeForm = this.fb.group({
      // validate with post code.
      postCode: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
    });
  }

  onClickFetchAddress(): void {
    if (this.postCodeForm.invalid) {
      return;
    }

    this.search.emit(this.postCode.value);
  }
}
