import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-supplierupdate',
  templateUrl: './supplierupdate.component.html',
  styleUrls: ['./supplierupdate.component.scss']
})
export class SupplierupdateComponent implements OnInit  {
  SupplierForm:FormGroup;

  constructor(private fb: FormBuilder,
     private api : ApiService,
      private router:Router,
      private route:ActivatedRoute
      ) {}

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
console.log(this.route.snapshot.params['id'])
this.api.getSupplierData(this.route.snapshot.params['id']).subscribe((result)=>{
 this.SupplierForm= new FormGroup({
    Name : new FormControl(result['Name']),
  ContactName : new FormControl(result['ContactName']),
  ContactNo : new FormControl(result[' ContactNo']),
  Email : new FormControl(result['Email']),
  GSTNo : new FormControl(result[' GSTNo']),
  CINNo: new FormControl(result['CINNo']),
  Address : new FormControl(result['Address']),
  Area : new FormControl(result['Area']),
  City : new FormControl(result['City']),
  Country : new FormControl(result['Country']),
  Pincode : new FormControl(result['Pincode']),

  tempAddress : new FormControl(result['tempAddress']),
  tempArea : new FormControl(result['tempArea']),
  tempCity : new FormControl(result['tempCity']),
  tempCountry : new FormControl(result['tempCountry']),
  tempPincode : new FormControl(result['tempPincode']),

 })
})
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

supplierUpdate(){
  this.api.supplierUpdate(this.route.snapshot.params['id'],this.SupplierForm.value).subscribe({
   next:(res) => {
     alert(" Supplier Updated successfully");
     this.router.navigate(['/master/supplierlist']) ;
   },
   error: console.log,
   
 })
}


}

