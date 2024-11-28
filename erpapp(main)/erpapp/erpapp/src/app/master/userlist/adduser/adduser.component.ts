import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent   {
  UserForm:FormGroup;
  
  hide = true;
  hide1=true;

  constructor(private fb: FormBuilder, private api:ApiService, private router:Router) {}

ngOnInit(): void{
  
    this.UserForm = this.fb.group({
      id:[''],
  Name : ['',Validators.required],
  Role : ['',Validators.required],
  Designation : ['',Validators.required],
  Password : ['',Validators.required],
  ConfirmPassword : ['',Validators.required],
  
})
}
onSubmit()
{
  if(this.UserForm.valid){
    this.api.postUser(this.UserForm.value)
    .subscribe({
      next:(val:any)=>{
        alert("User added successfully");
        this.router.navigate(['/userlist']);
      },
      error:()=>{
        alert("error while adding");
      }
    })
  }
  

}}