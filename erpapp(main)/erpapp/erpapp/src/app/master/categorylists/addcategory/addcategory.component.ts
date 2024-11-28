import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {
  addcategory: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService){}


  addcategorySubmit(){
    
    if(this.addcategory.value){
      this._api.addCategory(this.addcategory.value).subscribe({
        next:(val:any)=>{
          alert('Category added sucessfully');
          //this._dailogRef.close();
        }
      })
    }

  }
  ngOnInit(): void {
      
  
  this.addcategory = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: ["", Validators.required],

  })
}

}
