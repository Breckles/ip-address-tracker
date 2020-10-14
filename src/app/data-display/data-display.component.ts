import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IpInfo } from '../models/userIpInfo.model';

import { IpService } from '../services/ip-service.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent implements OnInit {
  constructor(private ipService: IpService) {}

  private ipInfoSubscription: Subscription;
  public ipInfo: IpInfo = new IpInfo('-', '-', '-', '-', 0, 0, '-', '-');

  ngOnInit(): void {
    this.ipInfoSubscription = this.ipService.onIpInfoObtained.subscribe(
      (info) => {
        this.ipInfo = info;
      }
    );
  }
}
