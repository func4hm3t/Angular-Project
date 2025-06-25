import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { MoviesComponent } from './app/movies/movies.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { MovieDetailComponent } from './app/movie-detail/movie-detail.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent }

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient(),],
});
