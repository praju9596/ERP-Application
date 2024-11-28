import { Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent {
  displayedColumns: string[] = ['id', 'Name', 'Address','ContactNo','Email', 'Action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
   constructor(private api : ApiService ,private router:Router){}

    ngOnInit(): void {
      this.getCustomer();
  }
 getCustomer(){
   this.api.getCustomer().subscribe({
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
 deleteCustomer(id: number){
  this.api.deleteCustomer(id).subscribe({
    next: (res)=> {
      alert("Customer deleted");
      this.getCustomer();
    },
    error: console.log,
    
    
  })
}
editCustomer(){
  this.router.navigate(["/addcustomer"],);
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }}