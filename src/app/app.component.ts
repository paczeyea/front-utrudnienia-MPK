import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { buttonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, MatSlideToggleModule, buttonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mapa Utrudnień MPK';
}
