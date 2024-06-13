import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScheduleDialogComponent } from '../modals/schedule-dialog/schedule-dialog.component';
import { LocDialogComponent } from '../modals/loc-dialog/loc-dialog.component';
import { ReportDialogComponent } from '../modals/report-dialog/report-dialog.component';


@Component({
  selector: 'app-buttonsComponent',
  standalone: true,
  templateUrl: './buttons.component.html'
  // styleUrls: ['./buttons.component.css']
})
export class buttonsComponent {
  constructor(public dialog: MatDialog) {}
  
  openScheduleDialog(){
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      width: '55%'
    });
  }
  openLocDialog(){
    const dialogRef = this.dialog.open(LocDialogComponent, {
      width: '55%'
    });
  }
  openReportDialog(){
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '55%'
    });
  }
}