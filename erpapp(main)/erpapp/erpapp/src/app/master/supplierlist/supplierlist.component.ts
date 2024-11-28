import { Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent {
  displayedColumns: string[] = ['id', 'Name', 'Address','ContactNo','Email', 'Action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
   constructor(private api : ApiService ,private router:Router){}

    ngOnInit(): void {
      this.getSupplier();
  }
 getSupplier(){
   this.api.getSupplier().subscribe({
     next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     },
     error: (err)=> {
       console.log(err)
     }
   })
 }
 deleteSupplier(id: number){
  this.api.deleteSupplier(id).subscribe({
    next: (res)=> {
      alert("Supplier deleted");
      this.getSupplier();
    },
    error: console.log,
    
    
  })
}
editSupplier(){
  this.router.navigate(["/addsupplier"],);
}
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }}