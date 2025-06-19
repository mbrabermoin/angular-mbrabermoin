import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'table-page',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
})
export class TablePage {
  private http = inject(HttpClient);

  userSignal = toSignal<any[], any[]>(
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(() => of([]))),
    { initialValue: [] }
  );

  stringify(obj: any): string {
    return JSON.stringify(obj, null, 2);
  }

  colDefs = [
    { field: 'id' },
    { field: 'name' },
    { field: 'username' },
    { field: 'email' },
    { field: 'address.city', headerName: 'City' },
    { field: 'phone' },
    { field: 'company.name', headerName: 'Company' },
  ];
  rowData = computed(() => this.userSignal() ?? []);
}
