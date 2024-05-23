import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-loc-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loc-dialog.component.html',
  styleUrl: './loc-dialog.component.css'
})
export class LocDialogComponent {  

  constructor(private vehicleService: VehiclesService) {}
  showBusNumbers: boolean = true;
  showTramNumbers: boolean = false;
  


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
