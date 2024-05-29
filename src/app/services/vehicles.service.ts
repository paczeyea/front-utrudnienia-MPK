import {Injectable} from '@angular/core';
import {interval, Observable, switchMap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private serviceShownVehiclesList: string[] = [];
  private apiUrl = 'http://localhost:8080/vehiclepositions/latest';

  constructor(private http: HttpClient) {
  }

  startAddingBusMarkers(): Observable<VehiclePosition[]> {
    return interval(5000).pipe(
      switchMap(() => this.sendRoutesIds(this.serviceShownVehiclesList))
    );
  }

  public getVehicleNumbers(): string[] {
    return this.serviceShownVehiclesList;
  }

  public addVehicleNumber(number: string): void {
    this.serviceShownVehiclesList.push(number);
  }

  public rmFromShownVehicleList(number: string) {
    const index = this.serviceShownVehiclesList.indexOf(number);
    if (index !== -1) {
      this.serviceShownVehiclesList.splice(index, 1);
    }
  }

  public isElementinList(number: string): boolean {
    return this.serviceShownVehiclesList.includes(number);
  }

  public sendRoutesIds(serviceShownVehiclesList: string[]): Observable<VehiclePosition[]> {
    const url = `${this.apiUrl}?routeIds=${serviceShownVehiclesList.join(',')}`;
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });
    return this.http.get<VehiclePosition[]>(url, {headers});
  }


}
