import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { MatSort } from '@angular/material/sort';
import { Data, Router } from '@angular/router';


@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.scss']
})
export class EnquirylistComponent {
  displayedColumns: string[] = ['id', 'Name', 'Desc', 'Action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
   constructor(private api : ApiService ,private router:Router){}

   ngOnInit(): void {
       this.getEnquiry();
   }
  getEnquiry(){
    this.api.getEnquiry().subscribe({
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
  deleteEnquiry(id: number){
    this.api.deleteEnquiry(id).subscribe({
      next: (res)=> {
        alert("Enquiry deleted");
        this.getEnquiry();
      },
      error: console.log,
      
      
    })
  }
  
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}