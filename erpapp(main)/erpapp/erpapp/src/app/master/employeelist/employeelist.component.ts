import { Component ,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
 

import { ActivatedRoute, Router } from '@angular/router';
import { Navigation } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent {
  displayedColumns: string[] = ['id', 'employeeName', 'city', 'country','contact','email','action'];
  dataSource = new MatTableDataSource<any>;
  itemListdetails:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
data: any;

constructor(private _api:ApiService , private route:Router){
  
}


 ngOnInit(): void { 
    this.getemployeeList();
}
getemployeeList(){
  this._api.getemployeeList().subscribe({
    next:(res)=>{
this.dataSource=new MatTableDataSource(res)
this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
 
    },
    error:console.log,
  });
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  deleteemploye(id:number){
    this._api.deleteemployee(id).subscribe({
      next:(res)=>{
        alert('employee deleted');
        this.getemployeeList();
      },
      error:console.log,
    })
  }
  

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

// editemployee(data: any ){
    
//   this.route.navigate(['/updateemployee/{{element.id}}']);
  
// }
}
