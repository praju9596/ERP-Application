import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit{
  addEmployee:FormGroup;

constructor(private fb:FormBuilder, private _api:ApiService, private router:Router){}

ngOnInit(): void {
 this.addEmployee=this.fb.group({
  employeeName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
  address:['',Validators.required],
  city:['',Validators.required],
  country:['',Validators.required],
  pincode:['',Validators.required],
  phone:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
  contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
  email:['',[Validators.required,Validators.email]],
  pan:['',[Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
  phone1:['',Validators.required],
  aadhaar:['',Validators.required],
  tempAddress : ['',Validators.required],
  tempCity : ['',Validators.required],
  tempCountry : ['',Validators.required],
  tempPincode : ['',Validators.required],

 })   
}
temp(checkValue){

  if(checkValue){
    console.log(this.addEmployee.value.address);
    this.addEmployee.patchValue({
      tempAddress: this.addEmployee.value.address,
    });
    
    this.addEmployee.patchValue({
      tempCity: this.addEmployee.value.city,
    });
    this.addEmployee.patchValue({
      tempCountry: this.addEmployee.value.country,
    });
    this.addEmployee.patchValue({
      tempPincode: this.addEmployee.value.pincode,
    });
  
  }
  else {
    this.addEmployee.patchValue({tempAddress: null});
    
    this.addEmployee.patchValue({tempCity: null});
    this.addEmployee.patchValue({tempCountry: null});
    this.addEmployee.patchValue({tempPincode: null});
  }
  
}




formSubmit(){
  if(this.addEmployee.value){
    this._api.addemployee1(this.addEmployee.value).subscribe({
      next:(val:any)=>{
        alert(' employee added sucessfully');
        this.router.navigate(['/master/employeelist']);
      }
    })
  }


}

}
