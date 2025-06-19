import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderLinksService } from '../../services/header-links';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  headerLinkService = inject(HeaderLinksService);
  get links() {
    return this.headerLinkService.links;
  }
}
