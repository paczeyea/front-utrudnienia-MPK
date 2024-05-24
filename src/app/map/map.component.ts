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



  constructor(){}
  map: any;
  GPSmarker: any;
  GPScircle: any;
  GPSicon: any;

  ngOnInit(): void {
    this.map = L.map('map').setView([51.1356, 17.0376], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'
    }).addTo(this.map);
  
    this.GPSicon = L.icon({
      iconUrl: './assets/pin/location-pin.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    
    navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this));
    this.addBusMarker(51.1290, 17.0376);
  }

  success(pos: { coords: { latitude: any; longitude: any; accuracy: any; }; }){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (this.GPSmarker) {
      this.map.removeLayer(this.GPSmarker);
    }
    if (this.GPScircle) {
      this.map.removeLayer(this.GPScircle);
    }

    this.GPSmarker = L.marker([lat, lng], { icon: this.GPSicon }).addTo(this.map);
    this.GPScircle = L.circle([lat, lng], { radius: accuracy }).addTo(this.map);
      
    this.map.fitBounds(this.GPScircle.getBounds());
  }

  error(err: any){
    if(err.code === 1){
      alert("Nie pozwolono na geolokalizację");
    }
    else{
      alert("Nie udało się pobrać lokalizacji");
    }
  }


  addBusMarker(posLat: number, posLon: number){
    L.marker([posLat, posLon], { icon: this.GPSicon } ).addTo(this.map);
  }
}
