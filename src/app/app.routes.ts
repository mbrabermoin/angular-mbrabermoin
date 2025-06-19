import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { CounterPage } from './pages/counter-page/counter-page';
import { TodolistPage } from './pages/todolist-page/todolist-page';
import { TablePage } from './pages/table-page/table-page';
import { AlbumPage } from './pages/album-page/album-page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./pages/home-page/home-page').then((m) => m.HomePage);
    },
  }, // http://localhost:4200/
  { path: 'about', component: AboutPage }, // http://localhost:4200/about
  { path: 'counter', component: CounterPage }, // http://localhost:4200/counter
  { path: 'todo-list', component: TodolistPage }, // http://localhost:4200/todo-list
  { path: 'users-table', component: TablePage }, // http://localhost:4200/table
  { path: 'album', component: AlbumPage }, // http://localhost:4200/album
];
