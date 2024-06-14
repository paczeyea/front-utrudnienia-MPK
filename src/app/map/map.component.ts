import { Component, OnInit, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
import { buttonsComponent } from '../buttons/buttons.component';
import { StopsService, Stop } from '../services/stops.service';
import {VehiclesService} from "../services/vehicles.service";

interface Route {
  routeId: string;
  routeType: number;
  validFrom: string;
}

interface Trip {
  tripId: string;
  routeId: string;
  route: Route;
  tripHeadsign: string;
  directionId: number;
  shapeId: number;
  variantId: number;
}

interface Vehicle {
  vehicleID: number;
  tripId: string;
  trip: Trip;
}

interface VehiclePosition {
  posId: number;
  vehicleID: number;
  vehicle: Vehicle;
  posLat: number;
  posLon: number;
  timestamp: string;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [buttonsComponent],
  templateUrl: './map.component.html'
  // styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  constructor(private StopsService: StopsService, private vehicleService: VehiclesService){}
  map: any;
  GPSmarker: any;
  GPScircle: any;
  GPSicon: any;
  BusGPSicon = L.icon({
    iconUrl: './assets/assets-buttons/bus.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
  TramGPSicon = L.icon({
    iconUrl: './assets/assets-buttons/tram.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
  PinGPSicon = L.icon({
    iconUrl: './assets/pin/location-pin.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
  private subscription: any;
  private busMarkers: { [vehicleID: number]: L.Marker } = {};
  BusStopicon: any;
  TramStopicon: any;

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

    this.BusGPSicon = L.icon({
      iconUrl: './assets/assets-buttons/bus.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })

    this.BusStopicon = L.icon({
      iconUrl: './assets/icons/busstopicon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })



    this.subscription =
      this.vehicleService.startAddingBusMarkers().subscribe((vehiclePositions: VehiclePosition[]) => {
        for (const vehiclePosition of vehiclePositions) {
          if (this.busMarkers[vehiclePosition.vehicleID]) {
            this.map.removeLayer(this.busMarkers[vehiclePosition.vehicleID]);
          }
          this.busMarkers[vehiclePosition.vehicleID] = this.addVehicleMarker(
            vehiclePosition.posLat, vehiclePosition.posLon,
            vehiclePosition.vehicle.trip.route.routeType);
        }
      });

    this.addStopSign(51.1356, 17.0376);
    this.StopsService.getStopsFromfile().subscribe((stops: Stop[]) => {
      for (const stop of stops) {
        this.addStopSign(stop.stop_lat, stop.stop_lon);
      }
    });




  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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


  addVehicleMarker(posLat: number, posLon: number, type: number): L.Marker {
    let icon;
    switch (type) {
      case 0: {
        icon = this.BusGPSicon;
        break;
      }
      case 3: {
        icon = this.TramGPSicon;
        break;
      }
      default: {
        icon = this.PinGPSicon;
      }
    }


    const marker = L.marker([posLat, posLon],
      {icon: icon}).addTo(this.map);
    return marker;
  }

  addStopSign(posLat: number, posLon: number){
    L.marker([posLat, posLon], { icon: this.BusStopicon } ).addTo(this.map)
  }




}
