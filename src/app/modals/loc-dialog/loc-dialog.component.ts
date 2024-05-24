import {Component, Input, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { VehiclesService } from '../../services/vehicles.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

interface Route {
  routeId: string;
  routeType: number;
  validFrom: string;
}

@Component({
  selector: 'app-loc-dialog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './loc-dialog.component.html',
  styleUrl: './loc-dialog.component.css'
})



export class LocDialogComponent implements OnInit{

  constructor(private vehicleService: VehiclesService, private http: HttpClient) {}
  showBusNumbers: boolean = true;
  showTramNumbers: boolean = false;
  buses: Route[] = [];
  trams: Route[] = [];

  ngOnInit() {
    this.http.get<Route[]>('http://localhost:8080/routes').subscribe(
      (data: Route[]) => {
        this.buses = data.filter(route => route.routeType === 3);
        this.trams = data.filter(route => route.routeType === 0);
      },
      (error) => {
        console.error('There was an error!', error);
        // Ustawiamy domyślne wartości dla buses i trams
        this.buses = [{routeId: '101', routeType: 3, validFrom: ''}, {routeId: '102', routeType: 3, validFrom: ''}, {routeId: '103', routeType: 3, validFrom: ''}];
        this.trams = [{routeId: '21', routeType: 0, validFrom: ''}, {routeId: '22', routeType: 0, validFrom: ''}, {routeId: '23', routeType: 0, validFrom: ''}];
      }
    );
  }

  toggleView(view: string){
    if(view == 'bus'){
      this.showBusNumbers = true;
      this.showTramNumbers = false;
      }
    else{
      this.showBusNumbers = false;
      this.showTramNumbers = true;
    }}

  toggleElement(number: string){
    if(this.isElementinList(number)){
      this.rmFromShownVehicleList(number);
    }
    else{
      this.addToShownVehicleList(number);
    }
    console.log(this.vehicleService.getVehicleNumbers());
  }

  addToShownVehicleList(number: string){
    this.vehicleService.addVehicleNumber(number);
  }

  rmFromShownVehicleList(number: string){
    this.vehicleService.rmFromShownVehicleList(number);
  }

  isElementinList(number: string): boolean {
    return this.vehicleService.isElementinList(number)
  }


}
