import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addenquirymode',
  templateUrl: './addenquirymode.component.html',
  styleUrls: ['./addenquirymode.component.scss']
})
export class AddenquirymodeComponent {
  addEnq: FormGroup;
  constructor(private fb: FormBuilder ,private _api:ApiService, private router:Router){}
  Submit(){
    if(this.addEnq.valid){
      this._api.addEnquirymode(this.addEnq.value).subscribe({
        next:(val:any)=>{
          alert(' enquiry added sucessfully');
          this.router.navigate(['/master/enquirymodelists']);
        }
      })
    }

  }
  ngOnInit(): void {
      
  
  this.addEnq = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: [""],

  })


}
}



