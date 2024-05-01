import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { buttonsComponent } from './buttons/buttons.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, MatSlideToggleModule, buttonsComponent, GeolocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MPK_nowy';
}
