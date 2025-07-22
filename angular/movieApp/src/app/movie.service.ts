import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie/movie';
import { Movies } from './movie.datasource'; // Dummy data
import { LoggingService } from './logging.service'; // loggingService import et
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = '/api/movies';

  constructor(private loggingService: LoggingService,
    private http: HttpClient
  ) { }
  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: number): Observable<Movie | undefined> { // undefined olabilir diye düzelttik
    this.loggingService.add('MovieService : get movie detail by id=' + id);
    const movie = Movies.find(movie => movie.id === id);
    return this.http.get<Movie>(this.apiMoviesUrl + '/' + id);
  }
}
