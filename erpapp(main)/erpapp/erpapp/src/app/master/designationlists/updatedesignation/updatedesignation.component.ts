
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.scss']
})
export class UpdatedesignationComponent {
  addstatusSubmit() {
    throw new Error('Method not implemented.');
    }
      adddesignation: FormGroup;
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
          
      
      this.adddesignation= this.fb.group({
        Name: [
          "",
          [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
        ],
        Description: ["", Validators.required],
    
      })
      this._api.editdesignation(this.router.snapshot.params['id']).subscribe((result)=>{
        this.adddesignation=new FormGroup({
          Name: new FormControl(result['Name']),
          Description:new FormControl(result['Description'])
        })
      
      })
    }
    
    upadatedesignation(){
      this._api.upadtedesignation(this.router.snapshot.params['id'],this.adddesignation.value).subscribe({
        next:(res) => {
          alert("  Updated successfully");
          //window.location.href = '/employeelist';
        },
        error: console.log,
        
      })
     }
    
    }

