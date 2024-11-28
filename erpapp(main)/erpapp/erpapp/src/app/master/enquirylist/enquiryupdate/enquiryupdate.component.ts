import { Component, OnInit, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import {} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-enquiryupdate',
  templateUrl: './enquiryupdate.component.html',
  styleUrls: ['./enquiryupdate.component.scss']
})
export class EnquiryupdateComponent implements OnInit  {
  EnquiryForm !:FormGroup;
  getEnquiryData: any;

  constructor(private fb: FormBuilder,
     private api : ApiService,
     private router:Router,
     private route:ActivatedRoute
     )  {}

ngOnInit(): void{
  
    this.EnquiryForm = this.fb.group({
  Name : ['',Validators.required],
  Desc : ['']
  
});
console.log(this.route.snapshot.params['id'])
this.api.getEnquiryData(this.route.snapshot.params['id']).subscribe((result)=>{
  this.EnquiryForm= new FormGroup({
    Name : new FormControl(result['Name']),
  Id :  new FormControl(result['Id']),
  Desc : new FormControl(result['Desc'])

  })
})
}
enquiryUpdate(){
   this.api.enquiryUpdate(this.route.snapshot.params['id'],this.EnquiryForm.value).subscribe({
    next:(res) => {
      alert(" Enquiry Updated successfully");
      
      this.router.navigate(['/master/enquirylist']) ;
    },
    error: console.log,
    
  })
}

}



