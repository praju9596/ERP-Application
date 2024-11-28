import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.scss']
})
export class AddsupplierComponent   {
  SupplierForm:FormGroup;

  constructor(private fb: FormBuilder, private api : ApiService, private router:Router) {}

ngOnInit(): void{
  
    this.SupplierForm = this.fb.group({
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
    console.log(this.SupplierForm.value.Address);
    this.SupplierForm.patchValue({
      tempAddress: this.SupplierForm.value.Address,
    });
    this.SupplierForm.patchValue({
      tempArea: this.SupplierForm.value.Area,
    });
    this.SupplierForm.patchValue({
      tempCity: this.SupplierForm.value.City,
    });
    this.SupplierForm.patchValue({
      tempCountry: this.SupplierForm.value.Country,
    });
    this.SupplierForm.patchValue({
      tempPincode: this.SupplierForm.value.Pincode,
    });
  
  }
  else {
    this.SupplierForm.patchValue({tempAddress: null});
    this.SupplierForm.patchValue({tempArea: null});
    this.SupplierForm.patchValue({tempCity: null});
    this.SupplierForm.patchValue({tempCountry: null});
    this.SupplierForm.patchValue({tempPincode: null});
  }
  
}
onSubmit()
{
  if(this.SupplierForm.valid){
    this.api.postSupplier(this.SupplierForm.value)
    .subscribe({
      next:(res)=>{
        alert("Supplier added successfully");
        this.router.navigate(['/master/supplierlist']);
      },
      error:()=>{
        alert("error while adding");
      }
    })
  }  


} 
}


