import { Component,OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { FormBuilder, } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-visitlist',
  templateUrl: './visitlist.component.html',
  styleUrls: ['./visitlist.component.scss']
})
export class VisitlistComponent implements OnInit {
  reactiveForm :FormGroup;
  constructor(private fb:FormBuilder , private  _api:ApiService){}
  onSubmit(){
   if(this.reactiveForm.value){
     this._api.addVisitPlan(this.reactiveForm.value).subscribe({
       next:(val:any)=>{
         alert(' Visitplan added sucessfully');
         //this._dailogRef.close();
       }
     })
   }
 
 
 }
  
  ngOnInit(): void {
    this.reactiveForm=this.fb.group({
     customername:['',Validators.required],
     address:['',Validators.required],
     location:['',Validators.required],
     cityName:['',Validators.required],
     refBy:['',Validators.required],
     bussinessType:['',Validators.required],
     product:['',Validators.required],
     date:['',Validators.required], date1:['',Validators.required],
     nextDate:['',Validators.required],
     saleEng:['',Validators.required]
     
 
 
 
    })  
  }
}
