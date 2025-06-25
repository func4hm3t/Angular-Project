import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  title = 'movie list';
  movies: Movie[] = [];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    });
  }
}
