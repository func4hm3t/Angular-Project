import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Users } from './users/users';
import { Notfound } from './notfound/notfound';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'users', component: Users },
  { path: '**', component: Notfound }
];
