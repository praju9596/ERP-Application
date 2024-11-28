import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent   {
  CustomerForm:FormGroup;

  constructor(private fb: FormBuilder, private api : ApiService, private router:Router) {}

ngOnInit(): void{
  
    this.CustomerForm = this.fb.group({
      Id:[''],
  Name : ['',Validators.required],
  ContactName : ['',Validators.required],
  ContactNo : ['',Validators.required],
  Email : ['',Validators.required],
  GSTNo : ['',Validators.required],
  CINNo: [''],
  Address : ['',Validators.required],
  Area : ['',Validators.required],
  City : ['',Validators.required],
  Country : ['',Validators.required],
  Pincode : ['',Validators.required],

  tempAddress : ['',Validators.required],
  tempArea : ['',Validators.required],
  tempCity : ['',Validators.required],
  tempCountry : ['',Validators.required],
  tempPincode : ['',Validators.required],
  
});
}

temp(checkValue){

  if(checkValue){
    console.log(this.CustomerForm.value.Address);
    this.CustomerForm.patchValue({
      tempAddress: this.CustomerForm.value.Address,
    });
    this.CustomerForm.patchValue({
      tempArea: this.CustomerForm.value.Area,
    });
    this.CustomerForm.patchValue({
      tempCity: this.CustomerForm.value.City,
    });
    this.CustomerForm.patchValue({
      tempCountry: this.CustomerForm.value.Country,
    });
    this.CustomerForm.patchValue({
      tempPincode: this.CustomerForm.value.Pincode,
    });
  
  }
  else {
    this.CustomerForm.patchValue({tempAddress: null});
    this.CustomerForm.patchValue({tempArea: null});
    this.CustomerForm.patchValue({tempCity: null});
    this.CustomerForm.patchValue({tempCountry: null});
    this.CustomerForm.patchValue({tempPincode: null});
  }
  
}
onSubmit()
{
  if(this.CustomerForm.valid){
    this.api.postCustomer(this.CustomerForm.value)
    .subscribe({
      next:(res)=>{
        alert("Customer added successfully");
        this.router.navigate(['/master/customerlist']);
      },
      error:()=>{
        alert("error while adding");
      }
    })
  }  


}}