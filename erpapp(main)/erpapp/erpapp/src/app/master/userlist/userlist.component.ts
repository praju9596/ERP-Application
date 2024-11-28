import { Component,OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  displayedColumns: string[] = ['id', 'Name', 'Role','Designation', 'Action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
   constructor(private api : ApiService ,private router:Router){}

   ngOnInit(): void {
       this.getUser();
   }
  getUser(){
    this.api.getUser().subscribe({
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
  deleteUser(id: number){
    this.api.deleteUser(id).subscribe({
      next: (res)=> {
        alert("User deleted");
        this.getUser();
      },
      error: console.log,
      
      
    })
  }
  editUser(){
    this.router.navigate(["/adduser"],);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
