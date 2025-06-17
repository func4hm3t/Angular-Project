import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Movie } from '../movie/movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './movies.component.html'
})
export class MoviesComponent {
  title = 'movie list';
  movies: Movie[] = Movies;
}
