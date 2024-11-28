import { Component } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-visitplan',
  templateUrl: './visitplan.component.html',
  styleUrls: ['./visitplan.component.scss']
})
export class VisitplanComponent  {
  displayedColumns: string[] = ['id','customername', 'location','cityName','bussinessType','refBy','product','date','date1','saleEng','Action'];
  dataSource = new MatTableDataSource<any>;
  constructor(private _api:ApiService ){
  
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void { 
    this.getVisitPlan();
}
  getVisitPlan(){
    this._api.getVisitPlan().subscribe({
      next:(res)=>{
  this.dataSource=new MatTableDataSource(res)
  this.dataSource.paginator=this.paginator;
   
      },
      error:console.log,
    });
  }

  deleteVistPlan(id:number){
    this._api. deleteVistPlan(id).subscribe({
      next:(res)=>{
        alert('Visited Plan deleted');
        this.getVisitPlan();
      },
      error:console.log,
    })
  }

}