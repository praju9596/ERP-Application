import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent  implements OnInit{
  
  reactiveForm:FormGroup;
  onSubmit(){
    console.log(this.reactiveForm);
    
  }
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      
    })   
  }
}
