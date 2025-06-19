import { Injectable } from '@angular/core';

type HeaderLink = {
  label: string; // The text displayed for the link.
  url: string; // The URL the link points to.
  icon?: string; // Optional icon class for the link, e.g., 'fa fa-home'.
};

@Injectable({
  providedIn: 'root', // The service is provided in the root injector, making it available throughout the application.
})
export class HeaderLinksService {
  links: HeaderLink[] = [
    { label: 'Home', url: '/', icon: 'fa fa-home' },
    { label: 'Counter Page', url: '/counter' },
    { label: 'Album', url: '/album' },
  ];
  constructor() {}
}
