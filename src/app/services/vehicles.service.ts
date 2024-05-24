import { Injectable } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private serviceShownVehiclesList: string[] = [];

  constructor(){}

  startAddingBusMarkers(): Observable<{ lat: number, lon: number }> {
    return interval(5000).pipe(
      map(() => {
        const lat = 51.1290 + Math.random() * 0.01;
        const lon = 17.0376 + Math.random() * 0.01;
        return { lat, lon };
      })
    );
  }

  public getVehicleNumbers(): string[]{
    return this.serviceShownVehiclesList;
  }

  public addVehicleNumber(number: string): void{
    this.serviceShownVehiclesList.push(number);
  }

  public rmFromShownVehicleList(number: string){
    const index = this.serviceShownVehiclesList.indexOf(number);
    if(index !== -1){
      this.serviceShownVehiclesList.splice(index, 1);
    }
  }

  public isElementinList(number: string): boolean{
    return this.serviceShownVehiclesList.includes(number);
  }
}
