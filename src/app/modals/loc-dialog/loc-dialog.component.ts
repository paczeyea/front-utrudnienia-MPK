import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loc-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loc-dialog.component.html',
  styleUrl: './loc-dialog.component.css'
})
export class LocDialogComponent {


  constructor(private dialog: MatDialog){}
  showBusNumbers: boolean = true;
  showTramNumbers: boolean = false;
  shownVehiclesList: string[] = [];



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
    console.log(this.shownVehiclesList);
  }

  addToShownVehicleList(number: string){
    this.shownVehiclesList.push(number);
    // console.log(this.shownVehiclesList); 
  }

  rmFromShownVehicleList(number: string){
    const index = this.shownVehiclesList.indexOf(number);
    if(index !== -1){
      this.shownVehiclesList.splice(index, 1);
    }
    // console.log(this.shownVehiclesList);
  }

  isElementinList(number: string): boolean{
    return this.shownVehiclesList.includes(number);
  }


}
