import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ScheduleDialogComponent } from './modals/schedule-dialog/schedule-dialog.component';

@NgModule ({
  declarations:
  [
    ScheduleDialogComponent
  ],
  imports: [
    MatSlideToggleModule,
    AppComponent,
    MatDialogModule,
    CommonModule
]

})





class AppModule {}