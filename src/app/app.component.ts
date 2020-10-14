import { Component, OnInit } from '@angular/core';

import { IpService } from './services/ip-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.ipService.fetchIpInfo();
  }
}
