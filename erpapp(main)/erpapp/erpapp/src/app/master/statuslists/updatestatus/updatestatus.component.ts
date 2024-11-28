import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.scss']
})
export class UpdatestatusComponent {
  addstatusSubmit() {
    throw new Error('Method not implemented.');
    }
      addstatus: FormGroup;
      constructor(private fb: FormBuilder , private _api:ApiService,private router:ActivatedRoute){}
    
    
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
          
      
      this.addstatus = this.fb.group({
        Name: [
          "",
          [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
        ],
        Description: ["", Validators.required],
    
      })
      this._api.editstatus(this.router.snapshot.params['id']).subscribe((result)=>{
        this.addstatus=new FormGroup({
          Name: new FormControl(result['Name']),
          Description:new FormControl(result['Description'])
        })
      
      })
    }
    
    upadatestatus(){
      this._api.upadtestatus(this.router.snapshot.params['id'],this.addstatus.value).subscribe({
        next:(res) => {
          alert("  Updated successfully");
          //window.location.href = '/employeelist';
        },
        error: console.log,
        
      })
     }
    
    }







