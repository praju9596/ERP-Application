import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addenquiry',
  templateUrl: './addenquiry.component.html',
  styleUrls: ['./addenquiry.component.scss']
})
export class addenquiryComponent   {
  EnquiryForm !:FormGroup;

  constructor(private fb: FormBuilder,
     private api : ApiService,
     private router:Router,
     )  {}

ngOnInit(): void{
  
    this.EnquiryForm = this.fb.group({
  Name : ['',Validators.required],
  Id : [''],
  Desc : ['']
  
});
}

onSubmit()
{
  if(this.EnquiryForm.valid){
  this.api.postEnquiry(this.EnquiryForm.value)
  .subscribe({
    next:(val:any)=>{
      alert("Enquiry added successfully");
      this.router.navigate(['/master/enquirylist']);
    },
    error:()=>{
      alert("error while adding");
    }
  })
}


}
}