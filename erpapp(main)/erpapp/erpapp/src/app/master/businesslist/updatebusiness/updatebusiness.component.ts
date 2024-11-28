import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebusiness',
  templateUrl: './updatebusiness.component.html',
  styleUrls: ['./updatebusiness.component.scss']
})
export class UpdatebusinessComponent {
  BusinessForm:FormGroup;

  constructor(private fb: FormBuilder, private _api : ApiService ,private router:ActivatedRoute, private route:Router)  {}


ngOnInit(): void{
  
    this.BusinessForm = this.fb.group({
  Name : ['',Validators.required],
  desc:['']


})
this._api.editbusiness(this.router.snapshot.params['id']).subscribe((result)=>{
  this.BusinessForm=new FormGroup({
    Name: new FormControl(result['Name']),
    desc:new FormControl(result['desc'])
  })

})
}  

// onSubmit()
// {
//   //console.log(this.BusinessForm.valid)
//   if(this.BusinessForm.value){
//     this._api.postbussiness(this.BusinessForm.value)
//     .subscribe({
//       next:(val:any)=>{
//         alert("bussiness added successfully");
//       },
//       error:()=>{
//         alert("error while adding");
//       }
//     })
//   }
// }
upadteBussiness(){
  this._api.upadteBussiness(this.router.snapshot.params['id'],this.BusinessForm.value).subscribe({
    next:(res) => {
      alert("  Updated successfully");
      this.route.navigate(['/master/businesslist']);
    },
    error: console.log,
    
  })
 }




}
