import { Component } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
