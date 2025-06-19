import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private http = inject(HttpClient);

  getAlbumsFromApi() {
    const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
    return this.http.get<any[]>(albumUrl);
  }
}
