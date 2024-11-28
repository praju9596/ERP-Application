import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-subcategorylists',
  templateUrl: './subcategorylists.component.html',
  styleUrls: ['./subcategorylists.component.scss']
})
export class SubcategorylistsComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'Name', 'Description', 'action'];
  dataSource = new MatTableDataSource<any>;

  constructor(private _api:ApiService ){}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this. getSubCategory();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    getSubCategory(){
      this._api.getSubCategory().subscribe({
        next:(res)=>{
    this.dataSource=new MatTableDataSource(res)
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
     
        },
        error:console.log,
      });
    }
    deleteSubCategory(id:number){
      this._api.deleteSubCategory(id).subscribe({
        next:(res)=>{
          alert('SubCategory deleted');
          this.getSubCategory();
        },
        error:console.log,
      })
    } 
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}



