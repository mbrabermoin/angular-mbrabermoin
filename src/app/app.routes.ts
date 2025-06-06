import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
  { path: '', component: HomePage }, // http://localhost:4200/
  { path: 'about', component: AboutPage }, // http://localhost:4200/about
];
