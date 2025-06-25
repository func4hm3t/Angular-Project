import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  movieLength: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {

    this.movieService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies.slice(0, 5);
      this.movieLength = this.movies.length;
    });
  }
}
