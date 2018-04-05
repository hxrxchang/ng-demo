import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-message',
  templateUrl: './top-message.component.html',
  styleUrls: ['./top-message.component.css'],
})
export class TopMessageComponent implements OnInit {
  message = 'このサイトは郵便番号から住所を検索できるサービスです';
  constructor() {}

  ngOnInit() {}
}
