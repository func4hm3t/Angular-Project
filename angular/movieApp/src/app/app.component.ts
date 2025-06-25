import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LoggingComponent } from './logging/logging.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, LoggingComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
