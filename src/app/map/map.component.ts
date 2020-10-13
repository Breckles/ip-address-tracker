import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Default map view
    let map = L.map('map').setView([51.505, -0.09], 13);

    // set icon for marker
    let locationIcon = L.icon({
      iconUrl: '../assets/images/icon-location.svg',
    });

    let marker = L.marker([51.5, -0.09], { icon: locationIcon }).addTo(map);

    map.on('viewreset', (event) => {
      marker.setLatLng(map.getCenter());
    });

    // ask for user's location permission, and set view to location if allowed
    map.locate({ setView: true, maxZoom: 16 });

    // If user gave location permission, set marker to user location
    marker.setLatLng(map.getCenter());

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
    ).addTo(map);

    console.log(marker.getLatLng());
    console.log(map.getCenter());
  }
}
