import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-dialog.component.html',
  // styleUrl: './report-dialog.component.css'
})
export class ReportDialogComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
