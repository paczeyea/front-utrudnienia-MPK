import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { WhitePanelComponent } from '../white-panel/white-panel.component';

// {"1" : {"trip_id" : 3_31231121}}
@Component({
  selector: 'app-schedule-dialog',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './schedule-dialog.component.html'
  // styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent {

constructor(private dialog: MatDialog){

}
showBusNumbers: boolean = true;
showTramNumbers: boolean = false;
// issidepanel: boolean = false;


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

// sidepanelView(number: string){
//   this.issidepanel = !this.issidepanel;
//   if(this.issidepanel == true){
//     console.log("wysunięty albo nie");
//   }
// }

openWhitePanel(){
  const dialogRef = this.dialog.open(WhitePanelComponent, {
    width: '70%'
  });
  console.log("działa");
}

}

