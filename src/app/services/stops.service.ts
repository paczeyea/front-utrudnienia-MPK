import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Stop {
  stop_id: number;
  stop_code: string;
  stop_name: string;
  stop_lat: number;
  stop_lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  private csvUrl = '../assets/stops.txt'; 

  constructor(private http: HttpClient) { }

  getStopsFromCsv(): Observable<Stop[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map(csvData => {
        const lines = csvData.split('\n');
        const stops: Stop[] = [];

        for (const line of lines) {
          const [stop_id, stop_code, stop_name, stop_lat, stop_lon] = line.split(',');
          stops.push({
            stop_id: +stop_id,
            stop_code: stop_code,
            stop_name: stop_name,
            stop_lat: +stop_lat,
            stop_lon: +stop_lon
          });
        }
        return stops;
      })
    );
  }
}
