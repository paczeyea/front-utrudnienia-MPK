import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ScheduleDialogComponent } from './modals/schedule-dialog/schedule-dialog.component';
import { WhitePanelComponent } from './modals/white-panel/white-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
  declarations:
  [
    ScheduleDialogComponent,
    WhitePanelComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatDialogModule,
    CommonModule,
    HttpClientModule
],
providers: [HttpClientModule],
bootstrap: [AppComponent]

})

class AppModule {}