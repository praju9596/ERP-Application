import { Component ,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title = 'angularbasics';
  reactiveForm: FormGroup;
  
  ngOnInit() {
    this.reactiveForm= new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('',Validators.required),
      contact: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      designation: new FormControl('',Validators.required)
    })
  }
onSubmit(){
  console.log(this.reactiveForm);
}
}
