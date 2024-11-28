import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.scss']
})
export class AddrolesComponent implements OnInit {
  addRoles: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService, private router:Router){}


  addRolesSubmit(){
    
    if(this.addRoles.valid){
      this._api.addroles(this.addRoles.value).subscribe({
        next:(val:any)=>{
          alert('Roles added sucessfully');
          this.router.navigate(['/master/roleslist']);
          
        }
      })
    }

  }
  ngOnInit(): void {
      
  
  this.addRoles = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: [""],

  })
}




}
