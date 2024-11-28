import {AfterViewInit,OnInit,  Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-categorylists',
  templateUrl: './categorylists.component.html',
  styleUrls: ['./categorylists.component.scss']
})
export class CategorylistsComponent {
  displayedColumns: string[] = ['id', 'Name', 'Description', 'action'];
  dataSource = new MatTableDataSource<any>;
  id:number;
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(private _api:ApiService ){}
  ngOnInit(): void {
    this.getcategorylist();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getcategorylist(){
  this._api.getCategory().subscribe({
    next:(res)=>{
this.dataSource=new MatTableDataSource(res)
this.dataSource.paginator=this.paginator;
 
    },
    error:console.log,
  });
}
deletecategory(id:number){
      this._api.deleteCategory(id).subscribe({
        next:(res)=>{
          alert('Category deleted');
          this.getcategorylist();
        },
        error:console.log,
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}

