import { Component, inject, signal } from '@angular/core';
import { AlbumService } from '../../services/albums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-album-page',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './album-page.html',
  styleUrl: './album-page.css',
})
export class AlbumPage {
  [x: string]: any;
  albumService = inject(AlbumService);
  albums = signal<any[]>([]);
  selectedAlbumId = signal<number | null>(null);
  ngOnInit() {
    this.albumService.getAlbumsFromApi().subscribe({
      next: (data) => {
        this.albums.set(data);
      },
      error: (err) => {
        console.error('Error fetching albums:', err);
      },
    });
  }
}
