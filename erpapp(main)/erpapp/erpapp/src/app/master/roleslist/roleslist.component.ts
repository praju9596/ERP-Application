import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator,  MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.scss']
})
export class RoleslistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'Description', 'action'];
  dataSource = new MatTableDataSource<any>;
  id:number;
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _api:ApiService ){}
  ngOnInit(): void {
    this.getroleslist();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  getroleslist(){
  this._api.getrolesList().subscribe({
    next:(res)=>{
this.dataSource=new MatTableDataSource(res)
this.dataSource.paginator=this.paginator;
this.dataSource.sort = this.sort;
 
    },
    error:console.log,
  });
}
deleteroles(id:number){
      this._api.deleteroles(id).subscribe({
        next:(res)=>{
          alert('roles deleted');
          this.getroleslist();
        },
        error:console.log,
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

