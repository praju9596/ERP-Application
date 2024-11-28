import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  visible:boolean=true;
  visible1:boolean=true;
  changetype:boolean=true;
  changetype1:boolean=true;
  visible2:boolean=true;
  changetype2:boolean=true;
  reactiveForm:FormGroup;
  passwordPattern:any="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}";
  veiwOldPass(){                      //password eye button old password will be visible 
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
  veiwNewPass(){                      //password eye button new  password will be visible 
    this.visible1=!this.visible1;
    this.changetype1=!this.changetype1;
  }
  veiwConPass(){                      //password eye button confirm password will be visible 
    this.visible2=!this.visible2;
    this.changetype2=!this.changetype2;
  }
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      password: new FormControl('', Validators.required,),
      newPassword: new FormControl('', [Validators.required,Validators.pattern(this.passwordPattern)]),
    confirmPassword: new FormControl('', Validators.required)
      
      
    })   
    
  }
  onSubmit(){
    console.log(this.reactiveForm);
}}
