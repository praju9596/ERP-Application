import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateenquirymode',
  templateUrl: './updateenquirymode.component.html',
  styleUrls: ['./updateenquirymode.component.scss']
})
export class UpdateenquirymodeComponent {
  addEnq: FormGroup;
  constructor(private fb: FormBuilder ,private _api:ApiService,private router:ActivatedRoute, private route:Router){}
  // Submit(){
  //   if(this.addEnq.value){
  //     this._api.addEnquirymode(this.addEnq.value).subscribe({
  //       next:(val:any)=>{
  //         alert(' enquiry added sucessfully');
  //         //this._dailogRef.close();
  //       }
  //     })
  //   }

  // }
  ngOnInit(): void {
      
  this.addEnq = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: [""]

  })
this._api.editEnquiryMode(this.router.snapshot.params['id']).subscribe((result)=>{
  this.addEnq=new FormGroup({
    Name: new FormControl(result['Name']),
    Description:new FormControl(result['Description'])
  })

})

}
upadteEnquiryMode(){
  this._api.upadteEnquiryMode(this.router.snapshot.params['id'],this.addEnq.value).subscribe({
    next:(res) => {
      alert("  Updated successfully");
      this.route.navigate(['/master/enquirymodelists'])
    },
    error: console.log,
    
  })
 }
 



}


