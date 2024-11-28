import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-statuslists',
  templateUrl: './statuslists.component.html',
  styleUrls: ['./statuslists.component.scss']
})
export class StatuslistsComponent {
  displayedColumns: string[] = ['id', 'Name', 'Description', 'action'];
  dataSource = new MatTableDataSource<any>;
  id:number;
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(private _api:ApiService ){}

  ngOnInit(): void {
    this.getstatuslist();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getstatuslist(){
  this._api.getstatuslist().subscribe({
    next:(res)=>{
this.dataSource=new MatTableDataSource(res)
this.dataSource.paginator=this.paginator;
 
    },
    error:console.log,
  });
}
deletestatus(id:number){
      this._api.deletestatus(id).subscribe({
        next:(res)=>{
          alert('status deleted');
          this.getstatuslist();
        },
        error:console.log,
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
