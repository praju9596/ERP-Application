import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { JobcardComponent } from './jobcard/jobcard.component';

import { ProcComponent } from './proc/proc.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateoneComponent } from './createone/createone.component';
import { RoleslistComponent } from './master/roleslist/roleslist.component';
import { AddrolesComponent } from './master/roleslist/addroles/addroles.component';
import { EnquirylistComponent } from './master/enquirylist/enquirylist.component';
import { addenquiryComponent } from './master/enquirylist/addenquiry/addenquiry.component';
import { AddbusinessComponent } from './master/businesslist/addbusiness/addbusiness.component';
import { BusinesslistComponent } from './master/businesslist/businesslist.component';
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

import { UpdateenquirymodeComponent } from './master/enquirymodelists/updateenquirymode/updateenquirymode.component';
import { UpdaterolesComponent } from './master/roleslist/updateroles/updateroles.component';
import { UpdatesubcategoryComponent } from './master/subcategorylists/updatesubcategory/updatesubcategory.component';
import { UpdatebusinessComponent } from './master/businesslist/updatebusiness/updatebusiness.component';
import { EnquiryupdateComponent } from './master/enquirylist/enquiryupdate/enquiryupdate.component';
import { UserupdateComponent } from './master/userlist/userupdate/userupdate.component';
import { CustomerupdateComponent } from './master/customerlist/customerupdate/customerupdate.component';
import { SupplierupdateComponent } from './master/supplierlist/supplierupdate/supplierupdate.component';
import { UpdatevisitplanComponent } from './visitplan/updatevisitplan/updatevisitplan.component';
import { UpdateemployeeComponent } from './master/employeelist/updateemployee/updateemployee.component';
import { UpdatestatusComponent } from './master/statuslists/updatestatus/updatestatus.component';
import { UpdatecategoryComponent } from './master/categorylists/updatecategory/updatecategory.component';
import { UpdatedesignationComponent } from './master/designationlists/updatedesignation/updatedesignation.component';
const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  // {path:'visitplan/dialog',component:DialogComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'master/roleslist',component:RoleslistComponent},
  {path:'master/roleslist/addroles',component: AddrolesComponent},
  {path:'master/enquirylist',component:EnquirylistComponent},
  {path:'master/enquirylist/addenquiry',component:addenquiryComponent},
  {path:'master/businesslist',component:BusinesslistComponent},
  {path:'master/businesslist/addbusiness',component:AddbusinessComponent},
  {path:'master/businesslist/updatebusiness/updatebusiness/:id',component:UpdatebusinessComponent},
  {path:'master/userlist',component:UserlistComponent},
  {path:'master/userlist/adduser',component:AdduserComponent},
  {path:'master/employeelist',component:EmployeelistComponent},
  {path:'master/employeelist/addemployee',component:AddemployeeComponent},
  {path:'master/customerlist',component:CustomerlistComponent},
  {path:'master/customerlist/addcustomer',component:AddcustomerComponent},
  {path:'master/supplierlist',component:SupplierlistComponent},
  {path:'master/supplierlist/addsupplier',component:AddsupplierComponent},
  {path:'visitplan',component:VisitplanComponent},
  {path:'visitplan/visitlist',component:VisitlistComponent},
  {path:'enquiry', component:EnquiryComponent},
 {path:'sales',component:SalesComponent},
  {path:'jobcard',component:JobcardComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'proc', component:ProcComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'createone',component:CreateoneComponent},
  {path:'master/designationlists',component:DesignationlistsComponent},
  {path:'master/designationlists/adddesignation',component:AdddesignationComponent},
  {path:'master/subcategorylists',component:SubcategorylistsComponent},
  {path:'master/subcategorylists/addsubcategory',component:AddsubcategoryComponent},
  {path:'master/categorylists',component:CategorylistsComponent},
  {path:'master/categorylists/addcategory',component:AddcategoryComponent},
  {path:'master/statuslists',component:StatuslistsComponent},
  {path:'master/statuslists/addstatus',component:AddstatusComponent},
  {path:'master/enquirymodelists',component:EnquirymodelistsComponent},
  {path:'master/enquirymodelists/addenquirymode',component:AddenquirymodeComponent},
  {path:'master/enquirylist',component:EnquirylistComponent},
  {path:'master/enquirylist/addenquiry',component:addenquiryComponent},
   {path:'visitplan/followup', component:FollowupComponent},
   {path:'visitplan/followup/followdash', component:FollowdashComponent},
   {path:'profile',component:ProfileComponent},
   {path:'master/enquirymodelists/updateenquirymode/updateenquirymode/:id',component:UpdateenquirymodeComponent},
{path:'master/roleslist/updateroles/updateroles/:id',component:UpdaterolesComponent},
{path:'master/subcategorylists/updatesubcategory/updatesubcategory/:id',component:UpdatesubcategoryComponent},
{path:'master/enquirylist/enquiryupdate/:id',component:EnquiryupdateComponent},
{path:'master/userlist/userupdate/:id',component:UserupdateComponent},
{path:'master/customerlist/customerupdate/:id',component:CustomerupdateComponent},
{path:'master/supplierlist/supplierupdate/:id',component:SupplierupdateComponent},
{path:'master/employeelist/updateemployee/:id',component:UpdateemployeeComponent},
{path:'visitplan/updatevisitplan/:id',component:UpdatevisitplanComponent},
{path:'master/statuslists/updatestatus/updatestatus/:id',component:UpdatestatusComponent},
{path:'master/categorylists/updatecategory/:id',component:UpdatecategoryComponent},
{path:'master/designationlists/updatedesignation/:id',component:UpdatedesignationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
