import { Injectable } from '@angular/core';
import {interval, map, Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private serviceShownVehiclesList: string[] = [];
  private apiUrl = 'http://localhost:8080/vehiclepositions/latest?routeIds=Test,Test2';

  constructor(private http: HttpClient){}

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

  // public sendRoutesIds(serviceShownVehiclesList: string[]): Observable<any>{
  //   const url = `${this.apiUrl}?routeIds=${serviceShownVehiclesList.join(',')}`;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.post<any>(url, {}, { headers });
  // }



}
