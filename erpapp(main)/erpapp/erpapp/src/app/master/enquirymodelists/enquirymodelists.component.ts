import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-enquirymodelists',
  templateUrl: './enquirymodelists.component.html',
  styleUrls: ['./enquirymodelists.component.scss']
})
export class EnquirymodelistsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'Name', 'Description','action', ];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    constructor(private _api:ApiService ){}
    ngOnInit(): void {
      this.getEnquriymode();
    }
  
   
  
    getEnquriymode(){
    this._api.getEnquriymode().subscribe({
      next:(res)=>{
  this.dataSource=new MatTableDataSource(res)
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort = this.sort;
   
      },
      error:console.log,
    });
  }
  deleteEnquirymode(id:number){
        this._api.deleteEnquirymode(id).subscribe({
          next:(res)=>{
            alert('enquirymode deleted');
            this.getEnquriymode();
          },
          error:console.log,
        })
      }
  
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
