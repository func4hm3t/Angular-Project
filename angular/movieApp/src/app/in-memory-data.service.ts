import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, name: "movie 1", description: "güzel film", imageurl: "1.jpg" },
      { id: 2, name: "movie 2", description: "b", imageurl: "2.jpg" },
      { id: 3, name: "movie 3", description: "c", imageurl: "3.jpg" },
      { id: 4, name: "movie 4", description: "d", imageurl: "4.jpg" }
    ];
    return { movies };
  }
}
