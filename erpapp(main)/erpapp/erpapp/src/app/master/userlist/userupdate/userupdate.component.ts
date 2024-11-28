import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit  {
  UserForm:FormGroup;
  getUserData:any;
  hide = true;
  hide1=true;

  constructor(private fb: FormBuilder,
    private api : ApiService,
    private router:Router,
    private route:ActivatedRoute
    )  {}

ngOnInit(): void{
 
   
  this.UserForm = this.fb.group({
Name : ['',Validators.required],
Role : ['',Validators.required],
Designation : ['',Validators.required],
Password : ['',Validators.required],
ConfirmPassword : ['',Validators.required],
 
});
console.log(this.route.snapshot.params['id'])
this.api.getUserData(this.route.snapshot.params['id']).subscribe((result)=>{
 this.UserForm= new FormGroup({
    Name : new FormControl(result['Name']),
    Role :  new FormControl(result['Role']),
    Designation : new FormControl(result['Designation']),
    Password : new FormControl(result['Password']),
    ConfirmPassword : new FormControl(result['ConfirmPassword'])

 })
})
}
userUpdate(){
  this.api.userUpdate(this.route.snapshot.params['id'],this.UserForm.value).subscribe({
   next:(res) => {
     alert(" User Updated successfully");
     this.router.navigate(['/master/userlist']) ;
   },
   error: console.log,
   
 })
}

}

