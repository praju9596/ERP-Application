
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent {
  addEmployee:FormGroup;
  constructor(private fb:FormBuilder , private _api:ApiService , private route:Router,private router:ActivatedRoute){}


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
   
    });
    console.log(this.router.snapshot.params['id'])
this._api.getEmployeeData(this.router.snapshot.params['id']).subscribe((result)=>{
 this.addEmployee= new FormGroup({
  employeeName : new FormControl(result['employeeName']),
  address : new FormControl(result['address']),
  city : new FormControl(result['city']),
  country : new FormControl(result['country']),
  pincode : new FormControl(result['pincode']),
  phone: new FormControl(result['phone']),
  contact : new FormControl(result['contact']),
  email : new FormControl(result['email']),
  pan : new FormControl(result['pan']),
  phone1 : new FormControl(result['phone1']),
  aadhaar : new FormControl(result['aadhaar']),

  tempAddress : new FormControl(result['tempAddress']),
  tempCity : new FormControl(result['tempCity']),
  tempCountry : new FormControl(result['tempCountry']),
  tempPincode : new FormControl(result['tempPincode']),

 })
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
  employeeUpdate(){
    this._api.employeeUpdate(this.router.snapshot.params['id'],this.addEmployee.value).subscribe({
     next:(res) => {
       alert(" Employee Updated successfully");
       this.route.navigate(['/master/employeelist']);
     },
     error: console.log,
     
   })
  }
  

}
