import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private serviceShownVehiclesList: string[] = [];

  constructor(){}

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
