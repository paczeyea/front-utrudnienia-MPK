import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { buttonsComponent } from './buttons/buttons.component';
import { ScheduleDialogComponent } from './modals/schedule-dialog/schedule-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, MatSlideToggleModule, buttonsComponent, ScheduleDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Mapa Utrudnień MPK';



  constructor(public dialogRef: MatDialog) {
    this._windowSchedule = this.dialogRef.open(ScheduleDialogComponent);
    this._windowSchedule.updateSize("300px", "300px");
  }

  private _windowSchedule;
  closeDialog() {
    this._windowSchedule.close();
  }








}
