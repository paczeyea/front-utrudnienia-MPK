import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


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

constructor(private dialog: MatDialog){
  
}
showBusNumbers: boolean = true;
showTramNumbers: boolean = false;
issidepanel: boolean = false;


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

sidepanelView(number: string){
  this.issidepanel = !this.issidepanel;
  if(this.issidepanel == true){
    console.log("wysunięty albo nie");
  }
}

openScheduleDialog(){
  const dialogRef = this.dialog.open(ScheduleDialogComponent, {
    width: '55%'
  });
}

}

