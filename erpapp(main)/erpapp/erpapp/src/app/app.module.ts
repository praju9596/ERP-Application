import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { EnquiryComponent } from './enquiry/enquiry.component';
import { SalesComponent } from './sales/sales.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProcComponent } from './proc/proc.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateoneComponent } from './createone/createone.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{ MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


import { MatError } from '@angular/material/form-field';
import { MasterComponent } from './master/master.component';
import { RoleslistComponent } from './master/roleslist/roleslist.component';
import { AddrolesComponent } from './master/roleslist/addroles/addroles.component';
import { EnquirylistComponent } from './master/enquirylist/enquirylist.component';
import { addenquiryComponent } from './master/enquirylist/addenquiry/addenquiry.component';
import { BusinesslistComponent } from './master/businesslist/businesslist.component';
import { AddbusinessComponent } from './master/businesslist/addbusiness/addbusiness.component';
import { UserlistComponent } from './master/userlist/userlist.component';
import { AdduserComponent } from './master/userlist/adduser/adduser.component';
import { CustomerlistComponent } from './master/customerlist/customerlist.component';
import { AddcustomerComponent } from './master/customerlist/addcustomer/addcustomer.component';
import { SupplierlistComponent } from './master/supplierlist/supplierlist.component';
import { AddsupplierComponent } from './master/supplierlist/addsupplier/addsupplier.component';
import { EmployeelistComponent } from './master/employeelist/employeelist.component';
import { AddemployeeComponent } from './master/employeelist/addemployee/addemployee.component';
import { VisitplanComponent } from './visitplan/visitplan.component';
import { VisitlistComponent } from './visitplan/visitlist/visitlist.component';
import { DesignationlistsComponent } from './master/designationlists/designationlists.component';
import { AdddesignationComponent } from './master/designationlists/adddesignation/adddesignation.component';
import { SubcategorylistsComponent } from './master/subcategorylists/subcategorylists.component';
import { AddsubcategoryComponent } from './master/subcategorylists/addsubcategory/addsubcategory.component';
import { CategorylistsComponent } from './master/categorylists/categorylists.component';
import { AddcategoryComponent } from './master/categorylists/addcategory/addcategory.component';
import { StatuslistsComponent } from './master/statuslists/statuslists.component';
import { AddstatusComponent } from './master/statuslists/addstatus/addstatus.component';
import { EnquirymodelistsComponent } from './master/enquirymodelists/enquirymodelists.component';
import { AddenquirymodeComponent } from './master/enquirymodelists/addenquirymode/addenquirymode.component';
import { FollowupComponent } from './visitplan/followup/followup.component';
import { FollowdashComponent } from './visitplan/followup/followdash/followdash.component';
import { ProfileComponent } from './profile/profile.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateenquirymodeComponent } from './master/enquirymodelists/updateenquirymode/updateenquirymode.component';
import { UpdaterolesComponent } from './master/roleslist/updateroles/updateroles.component';
import { UpdatesubcategoryComponent } from './master/subcategorylists/updatesubcategory/updatesubcategory.component';
import { UpdatebusinessComponent } from './master/businesslist/updatebusiness/updatebusiness.component';
import { EnquiryupdateComponent } from './master/enquirylist/enquiryupdate/enquiryupdate.component';
import { UpdatevisitplanComponent } from './visitplan/updatevisitplan/updatevisitplan.component';
import { UpdateemployeeComponent } from './master/employeelist/updateemployee/updateemployee.component';
import { UserupdateComponent } from './master/userlist/userupdate/userupdate.component';
import { CustomerupdateComponent } from './master/customerlist/customerupdate/customerupdate.component';
import { SupplierupdateComponent } from './master/supplierlist/supplierupdate/supplierupdate.component';
import { UpdatestatusComponent } from './master/statuslists/updatestatus/updatestatus.component';
import { UpdatecategoryComponent } from './master/categorylists/updatecategory/updatecategory.component';
import { UpdatedesignationComponent } from './master/designationlists/updatedesignation/updatedesignation.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    SidenavComponent,

  EnquiryComponent,
    SalesComponent,
    JobcardComponent,
    PurchaseComponent,
    ProcComponent,
    DeliveryComponent,
    SublevelMenuComponent,
    TopComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    CreateoneComponent,
    ChangepasswordComponent,
    MasterComponent,
    RoleslistComponent,
    AddrolesComponent,
    EnquirylistComponent,
    addenquiryComponent,
    BusinesslistComponent,
    AddbusinessComponent,
    UserlistComponent,
    AdduserComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    SupplierlistComponent,
    AddsupplierComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    VisitplanComponent,
    VisitlistComponent,
    DesignationlistsComponent,
    AdddesignationComponent,
    SubcategorylistsComponent,
    AddsubcategoryComponent,
    CategorylistsComponent,
    AddcategoryComponent,
    StatuslistsComponent,
    AddstatusComponent,
    EnquirymodelistsComponent,
    AddenquirymodeComponent,
    FollowupComponent,
    FollowdashComponent,
    ProfileComponent,
    UpdateenquirymodeComponent,
    UpdaterolesComponent,
    UpdatesubcategoryComponent,
    UpdatebusinessComponent,
    UpdatevisitplanComponent,

  UpdateemployeeComponent,
  EnquiryupdateComponent,
    UserupdateComponent,
    CustomerupdateComponent,
    SupplierupdateComponent,
    UpdatestatusComponent,
    UpdatecategoryComponent,
    
UpdatedesignationComponent,
    
    
    
  
  
  
    
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
