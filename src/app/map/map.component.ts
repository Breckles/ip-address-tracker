import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';

import { IpInfo } from '../models/userIpInfo.model';
import { IpService } from '../services/ip-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  constructor(private ipService: IpService) {}
  private ipInfoSubscription: Subscription;
  private map: L.Map;

  // set icon for marker
  private locationIcon = L.icon({
    iconUrl: '../assets/images/icon-location.svg',
  });

  private marker: L.Marker;

  ngOnInit() {
    this.map = new L.Map('map');
    this.ipInfoSubscription = this.ipService.onIpInfoObtained.subscribe(
      (ipInfo: IpInfo) => {
        this.map.setView([ipInfo.latitude, ipInfo.longitude], 13);
        this.marker = L.marker([ipInfo.latitude, ipInfo.longitude], {
          icon: this.locationIcon,
        }).addTo(this.map);
        L.tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
          {
            attribution:
              '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              'pk.eyJ1Ijoid2F5bG9uY24iLCJhIjoiY2tmenluNG90MDhkcjMxbGVpdm53dW13ZSJ9.GZ6IWafdivwMazjFr5nzdg',
          }
        ).addTo(this.map);
      }
    );
  }

  ngOnDestroy() {
    this.ipInfoSubscription.unsubscribe();
  }
}
