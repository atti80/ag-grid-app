import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rowData: any[] = [
    { make: 'Honda', model: 'Jazz', price: 12000 },
    { make: 'Ford', model: 'Focus', price: 25000 },
    { make: 'Toyota', model: 'Corolla', price: 43000 }
  ]

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]
}
