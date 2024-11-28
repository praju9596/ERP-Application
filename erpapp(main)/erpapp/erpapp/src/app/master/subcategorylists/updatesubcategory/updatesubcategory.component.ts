import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatesubcategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./updatesubcategory.component.scss']
})
export class UpdatesubcategoryComponent {
  addSub: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService,private router:ActivatedRoute, private route:Router){}

//   Submit(){
//     if(this.addSub.value){
//       this._api.addSubCategory(this.addSub.value).subscribe({
//         next:(val:any)=>{
//           alert('subcategory added sucessfully');
//           //this._dailogRef.close();
//         }
//       })
//     }

// }


ngOnInit(): void {
      
  
  this.addSub = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: ["", Validators.required],

  })
  this._api.editSubCategory(this.router.snapshot.params['id']).subscribe((result)=>{
    this.addSub=new FormGroup({
      Name: new FormControl(result['Name']),
      Description:new FormControl(result['Description'])
    })
  
  })
}

updateSubCategory(){
  this._api.updateSubCategory(this.router.snapshot.params['id'],this.addSub.value).subscribe({
    next:(res) => {
      alert("  Updated successfully");
      this.route.navigate(['/master/subcategorylists']);
    },
    error: console.log,
    
  })
 }
}
