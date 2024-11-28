import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  visible:boolean=true;
  passwordPattern:any="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}";
changetype:boolean=true;
  reactiveForm:FormGroup | undefined;
veiwpass(){                      //password eye button password will be visible 
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}
ngOnInit(): void {
  this.reactiveForm=new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)])
  })  
}
onSubmit(){
  // console.log(this.reactiveForm);
  if(this.reactiveForm.valid)
   console.log(this.reactiveForm.value);
}


}
