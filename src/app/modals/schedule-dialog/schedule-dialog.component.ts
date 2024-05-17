import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

let vehicle_list = [1,2,3,4,5,6,7,8,9,10];

@Component({
  selector: 'app-schedule-dialog',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent {

constructor(){

}
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
  }
}





}

