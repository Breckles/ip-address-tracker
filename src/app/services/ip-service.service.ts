import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IpInfo } from '../models/userIpInfo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  private ipifyURL =
    'https://geo.ipify.org/api/v1?apiKey=at_UbRH6YJzcqSHxcXECYhatkkkSuVhb&ipAddress=';
  public ipInfo: IpInfo;
  public onIpInfoObtained = new Subject<IpInfo>();

  constructor(private http: HttpClient) {}

  public fetchIpInfo(ip = '') {
    // If ip = '' ipinfo returned defaults to user request IP
    this.http.get(`${this.ipifyURL}${ip}`).subscribe((responseData) => {
      this.ipInfo = new IpInfo(
        responseData['ip'],
        responseData['location']['city'],
        responseData['location']['region'],
        responseData['location']['postalCode'],
        responseData['location']['lat'],
        responseData['location']['lng'],
        responseData['location']['timezone'],
        responseData['isp']
      );

      console.log(this.ipInfo);

      this.onIpInfoObtained.next(this.ipInfo);
    });
  }
}
