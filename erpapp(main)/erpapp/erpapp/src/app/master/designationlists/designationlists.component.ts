import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-designationlists',
  templateUrl: './designationlists.component.html',
  styleUrls: ['./designationlists.component.scss']
})
export class DesignationlistsComponent {
  displayedColumns: string[] = ['id', 'Name', 'Description', 'action'];
  dataSource = new MatTableDataSource<any>;
  id:number;
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(private _api:ApiService ){}
  ngOnInit(): void {
    this.getdesignationlist();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getdesignationlist(){
  this._api.getdesignation().subscribe({
    next:(res)=>{
this.dataSource=new MatTableDataSource(res)
this.dataSource.paginator=this.paginator;
 
    },
    error:console.log,
  });
}
deletedesignationlist(id:number){
      this._api.deletedesignation(id).subscribe({
        next:(res)=>{
          alert('designationlist deleted');
          this.getdesignationlist();
        },
        error:console.log,
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


