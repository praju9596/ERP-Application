import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.scss']
})
export class AdddesignationComponent implements OnInit {
  adddesignation: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService){}


  adddesignationSubmit(){
    
    if(this.adddesignation.value){
      this._api.adddesignation1(this.adddesignation.value).subscribe({
        next:(val:any)=>{
          alert('designation added sucessfully');
          //this._dailogRef.close();
        }
      })
    }

  }
  ngOnInit(): void {
      
  
  this.adddesignation = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: ["", Validators.required],

  })
}
}
