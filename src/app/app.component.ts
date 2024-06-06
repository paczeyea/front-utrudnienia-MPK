import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { buttonsComponent } from './buttons/buttons.component';
import { ScheduleDialogComponent } from './modals/schedule-dialog/schedule-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WhitePanelComponent } from './modals/white-panel/white-panel.component';
import { LocDialogComponent } from './modals/loc-dialog/loc-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, MatSlideToggleModule, buttonsComponent, ScheduleDialogComponent, WhitePanelComponent, LocDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Mapa Utrudnień MPK';
  
  







}
