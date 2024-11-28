import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl ,FormBuilder} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-updatevisitplan',
  templateUrl: './updatevisitplan.component.html',
  styleUrls: ['./updatevisitplan.component.scss']
})
export class UpdatevisitplanComponent {
  reactiveForm :FormGroup;
  constructor(private fb:FormBuilder , private  _api:ApiService,private router:ActivatedRoute){}
//   onSubmit(){
//    if(this.reactiveForm.value){
//      this._api.addVisitPlan(this.reactiveForm.value).subscribe({
//        next:(val:any)=>{
//          alert(' Visitplan added sucessfully');
//          //this._dailogRef.close();
//        }
//      })
//    }
 
 
//  }
  
  ngOnInit(): void {
    this.reactiveForm=this.fb.group({
     customername:['',Validators.required],
     address:['',Validators.required],
     location:['',Validators.required],
     cityName:['',Validators.required],
     refBy:['',Validators.required],
     bussinessType:['',Validators.required],
     product:['',Validators.required],
     date:['',Validators.required], 
     date1:['',Validators.required],
     saleEng:['',Validators.required]
     }) 
     // console.log(this.router.snapshot.params['id'])
     this._api.getVisitPlanLists(this.router.snapshot.params['id']).subscribe((result)=>{
      this.reactiveForm= new FormGroup({
      customername : new FormControl(result['customername']), 
       address: new FormControl(result['address']),
       location:new FormControl(result['location']),
       cityName:new FormControl(result['cityName']),
       refBy:new FormControl(result['refBy']),
       bussinessType:new FormControl(result['businessType']),
       product:new FormControl(result['product']),
       date:new FormControl(result['date']),
       date1:new FormControl(result['date1']),
       saleEng:new FormControl(result['saleEng'])
})
})
}
  visitPlanUpdate(){
      this._api. visitPlanUpdate(this.router.snapshot.params['id'],this.reactiveForm.value).subscribe({
       next:(res) => {
         alert("  Updated successfully");
          },
       error: console.log,
       
     })
    }
}
