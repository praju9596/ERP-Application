import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-followdash',
  templateUrl: './followdash.component.html',
  styleUrls: ['./followdash.component.scss']
})
export class FollowdashComponent {
  displayedColumns: string[] = ['name', 'position', 'weight','symbol'];
  title = 'angularcrude';
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  
];
