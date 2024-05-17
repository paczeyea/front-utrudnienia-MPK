import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScheduleDialogComponent } from '../modals/schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-buttonsComponent',
  standalone: true,
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class buttonsComponent {
  constructor(public dialog: MatDialog) {}
  
  openScheduleDialog(){
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      width: '55%'

    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed');
    // });
  }

}