import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-addstatus',
  templateUrl: './addstatus.component.html',
  styleUrls: ['./addstatus.component.scss']
})
export class AddstatusComponent  implements OnInit{




  addstatus: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService){}


  addstatusSubmit(){
    
    if(this.addstatus.value){
      this._api.addstatus1(this.addstatus.value).subscribe({
        next:(val:any)=>{
          alert('status added sucessfully');
          //this._dailogRef.close();
        }
      })
    }

  }
  ngOnInit(): void {
      
  
  this.addstatus= this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: ["", Validators.required],

  })
}
}