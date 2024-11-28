import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.scss']
})
export class AddsubcategoryComponent implements OnInit {
  addSub: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService, private router:Router){}

  Submit(){
    if(this.addSub.valid){
      this._api.addSubCategory(this.addSub.value).subscribe({
        next:(val:any)=>{
          alert('subcategory added sucessfully');
          this.router.navigate(['/master/subcategorylists']);
        }
      })
    }

}


ngOnInit(): void {
      
  
  this.addSub = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: [""],

  })
}


}
