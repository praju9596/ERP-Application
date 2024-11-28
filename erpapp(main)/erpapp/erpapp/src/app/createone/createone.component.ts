import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-createone',
  templateUrl: './createone.component.html',
  styleUrls: ['./createone.component.scss']
})
export class CreateoneComponent implements OnInit{
  
  reactiveForm:FormGroup;
  passwordPattern:any="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}";
  visible:boolean=true;
  visible1:boolean=true;
  changetype:boolean=true;
  changetype1:boolean=true;
  veiwpass(){                      //password eye button password will be visible 
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
  veiwpass1(){                      //password eye button password will be visible 
    this.visible1=!this.visible1;
    this.changetype1=!this.changetype1;
  }
  veiwpass2(){                      //password eye button password will be visible 
    this.visible1=!this.visible1;
    this.changetype1=!this.changetype1;
  }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]),
      confirmpassword:new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)])
    })  
  }
  onSubmit(){
    console.log(this.reactiveForm);
    
  }
}

 