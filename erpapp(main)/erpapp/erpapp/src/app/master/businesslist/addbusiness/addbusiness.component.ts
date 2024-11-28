import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbusiness',
  templateUrl: './addbusiness.component.html',
  styleUrls: ['./addbusiness.component.scss']
})
export class AddbusinessComponent   {

  BusinessForm:FormGroup;

  constructor(private fb: FormBuilder, private _api : ApiService,private router:Router)  {}


ngOnInit(): void{
  
    this.BusinessForm = this.fb.group({
  Name : ['',Validators.required],
  desc:['']
  // EnquiryTypeDescription : ['',Validators.nullValidator]
})
}  

onSubmit()
{
  //console.log(this.BusinessForm.valid)
  if(this.BusinessForm.valid){
    this._api.postbussiness(this.BusinessForm.value)
    .subscribe({
      next:(val:any)=>{
        alert("bussiness added successfully");
        this.router.navigate(['/master/businesslist']);
      },
      error:()=>{
        alert("error while adding");
      }
    })
  }
}

}
