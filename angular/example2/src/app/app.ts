import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Users } from './users/users';
import { Categories } from './categories/categories';
import { Products } from './products/products';
import { Notfound } from './notfound/notfound';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Users,Categories,Products,Notfound,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'example2';
}
