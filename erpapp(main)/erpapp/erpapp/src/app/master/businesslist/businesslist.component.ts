import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.scss']
})
export class BusinesslistComponent {
  displayedColumns: string[] = ['id', 'Name', 'desc', 'Action'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getbussiness();
}
constructor(private _api:ApiService ){}

getbussiness(){
 this._api.getbussiness().subscribe({
   next: (res)=> {
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   },
   error: (err)=> {
     console.log(err)
   }
 })
}

deletebussiness(id: number){
  this._api.deletebussiness(id).subscribe({
    next: (res)=> {
      alert("bussiness deleted");
      this.getbussiness();
    },
    error: console.log,
     })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
 
  }
 



