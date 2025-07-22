// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }         from './app/app.component';
import { MoviesComponent }      from './app/movies/movies.component';
import { DashboardComponent }   from './app/dashboard/dashboard.component';
import { MovieDetailComponent } from './app/movie-detail/movie-detail.component';
import { InMemoryDataService }  from './app/in-memory-data.service';

const routes = [
  { path: 'movies',    component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id',component: MovieDetailComponent },
  { path: '**',        redirectTo: 'dashboard' }
];

bootstrapApplication(AppComponent, {
  providers: [
    // 1) Router
    provideRouter(routes),

    // 2) HttpClient (with DI interceptors)
    provideHttpClient(withInterceptorsFromDi()),

    // 3) In‑Memory Web API (must come after HttpClient)
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false
      })
    )
  ]
})
.catch(err => console.error(err));
