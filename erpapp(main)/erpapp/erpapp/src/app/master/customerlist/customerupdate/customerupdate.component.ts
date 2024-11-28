import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.scss']
})
export class CustomerupdateComponent implements OnInit  {
  CustomerForm:FormGroup;
  getCustomerData:any
  constructor(private fb: FormBuilder,
     private api : ApiService,
      private router:Router,
      private route:ActivatedRoute
      ) {}

ngOnInit(): void{
  
    this.CustomerForm = this.fb.group({
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
this.api.getCustomerData(this.route.snapshot.params['id']).subscribe((result)=>{
 this.CustomerForm= new FormGroup({
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

customerUpdate(){
  this.api.customerUpdate(this.route.snapshot.params['id'],this.CustomerForm.value).subscribe({
   next:(res) => {
     alert(" Customer Updated successfully");
     this.router.navigate(['/master/customerlist']) ;
   },
   error: console.log,
   
 })
}


}

