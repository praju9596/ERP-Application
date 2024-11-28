import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss']
})
export class UpdatecategoryComponent {
  addcategorySubmit() {
    throw new Error('Method not implemented.');
    }
      addcategory: FormGroup;
      constructor(private fb: FormBuilder , private _api:ApiService,private router:ActivatedRoute){}
    
    
      // addRolesSubmit(){
        
      //   if(this.addRoles.value){
      //     this._api.addroles(this.addRoles.value).subscribe({
      //       next:(val:any)=>{
      //         alert('employee added sucessfully');
      //         //this._dailogRef.close();
      //       }
      //     })
      //   }
    
      // }
    
    
      
      ngOnInit(): void {
          
      
      this.addcategory = this.fb.group({
        Name: [
          "",
          [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
        ],
        Description: ["", Validators.required],
    
      })
      this._api.editCategory(this.router.snapshot.params['id']).subscribe((result)=>{
        this.addcategory=new FormGroup({
          Name: new FormControl(result['Name']),
          Description:new FormControl(result['Description'])
        })
      
      })
    }
    
    upadatecategory(){
      this._api.updateCategory(this.router.snapshot.params['id'],this.addcategory.value).subscribe({
        next:(res) => {
          alert(" Updated successfully");
          //window.location.href = '/employeelist';
        },
        error: console.log,
        
      })
     }
}
