import { Component, OnInit, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
import { buttonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [buttonsComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(){};
  ngOnInit(): void {
    const map = L.map('map').setView([51.1356, 17.0376], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    const GPSicon = L.icon({
      iconUrl: './assets/pin/location-pin.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    
    navigator.geolocation.watchPosition(success, error)
    function success(pos: { coords: { latitude: any; longitude: any; accuracy: any; }; }){
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = pos.coords.accuracy;

      let marker = L.marker([lat, lng], { icon: GPSicon }).addTo(map);
      let circle = L.circle([lat, lng], { radius: accuracy}).addTo(map)
      
      map.fitBounds(circle.getBounds());
    }
    function error(err: any){
      if(err.code === 1){
        alert("Nie pozwolono na geolokalizację");
      }
      else{
        alert("Nie udało się pobrać lokalizacji");
      }
    }
  
}
}
