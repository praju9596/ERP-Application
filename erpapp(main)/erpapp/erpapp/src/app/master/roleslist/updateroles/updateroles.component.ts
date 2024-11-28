import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateroles',
  templateUrl: './updateroles.component.html',
  styleUrls: ['./updateroles.component.scss']
})
export class UpdaterolesComponent {
  addRoles: FormGroup;
  constructor(private fb: FormBuilder , private _api:ApiService,private router:ActivatedRoute, private route:Router){}


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
      
  
  this.addRoles = this.fb.group({
    Name: [
      "",
      [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
    ],
    Description: [""],

  })
  this._api.editRoles(this.router.snapshot.params['id']).subscribe((result)=>{
    this.addRoles=new FormGroup({
      Name: new FormControl(result['Name']),
      Description:new FormControl(result['Description'])
    })
  
  })
}

upadteRoles(){
  this._api.upadteRoles(this.router.snapshot.params['id'],this.addRoles.value).subscribe({
    next:(res) => {
      alert(" Roles  Updated successfully");
      this.route.navigate(['/master/roleslist']);
    },
    error: console.log,
    
  })
 }

}
