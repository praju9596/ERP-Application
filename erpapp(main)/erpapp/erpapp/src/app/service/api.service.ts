import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private _http:HttpClient) { }
  
addroles(data:any):Observable<any>{
  return this._http.post('  http://localhost:3000/roles',data)
}
getrolesList():Observable<any>{
  return this._http.get('  http://localhost:3000/roles')
}
deleteroles(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/roles/${id}`)
}
editRoles(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/roles/${id}`)
}
upadteRoles(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/roles/${id}`,data)
}









addSubCategory(data:any):Observable<any>{
  return this._http.post('  http://localhost:3000/subcategory',data)
}
getSubCategory():Observable<any>{
  return this._http.get('http://localhost:3000/subcategory')
}
deleteSubCategory(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/subcategory/${id}`)
}
editSubCategory(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/subcategory/${id}`)
}
updateSubCategory(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/subcategory/${id}`,data)
}



addEnquirymode(data:any):Observable<any>{
  return this._http.post('    http://localhost:3000/enqirymode',data)
}
getEnquriymode():Observable<any>{
  return this._http.get('  http://localhost:3000/enqirymode')
}
deleteEnquirymode(id:number):Observable<any>{
  return this._http.delete(`  http://localhost:3000/enqirymode/${id}`)
}
editEnquiryMode(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/enqirymode/${id}`)
}

upadteEnquiryMode(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/enqirymode/${id}`,data)
}












postbussiness(data : any){
  return this._http.post<any>("  http://localhost:3000/bussiness/",data);
}

getbussiness(){
  return this._http.get<any>("  http://localhost:3000/bussiness/");
}

deletebussiness(id:number): Observable<any>{
  return this._http.delete(`  http://localhost:3000/bussiness/${id}`);
}
editbusiness(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/bussiness/${id}`)
}
upadteBussiness(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/bussiness/${id}`,data)
}


postEnquiry(data : any){
  return this._http.post<any>("http://localhost:3000/EnquiryList/",data);
}
getEnquiry(){
  return this._http.get<any>("http://localhost:3000/EnquiryList/");
}
deleteEnquiry(id:number): Observable<any>{
  return this._http.delete(`http://localhost:3000/EnquiryList/${id}`);
}
getEnquiryData(id:number){
  return this._http.get(`http://localhost:3000/EnquiryList/${id}`);
}
enquiryUpdate(id:number,data: any){
  return this._http.put(`http://localhost:3000/EnquiryList/${id}`,data);
}



postUser(data : any){
  return this._http.post<any>("http://localhost:3000/UserList/",data);
}
getUser(){
  return this._http.get<any>("http://localhost:3000/UserList/");
}
deleteUser(id:number): Observable<any>{
  return this._http.delete(`http://localhost:3000/UserList/${id}`);
}
getUserData(id:number){
  return this._http.get(`http://localhost:3000/UserList/${id}`);
}
userUpdate(id:number,data: any){
  return this._http.put(`http://localhost:3000/UserList/${id}`,data);
}






postCustomer(data : any){
  return this._http.post<any>("http://localhost:3000/CustomerList/",data);
}
getCustomer(){
  return this._http.get<any>("http://localhost:3000/CustomerList/");
}
deleteCustomer(id:number): Observable<any>{
  return this._http.delete(`http://localhost:3000/CustomerList/${id}`);
}
getCustomerData(id:number){
  return this._http.get(`http://localhost:3000/CustomerList/${id}`);
}
customerUpdate(id:number,data: any){
  return this._http.put(`http://localhost:3000/CustomerList/${id}`,data);
}









postSupplier(data : any){
  return this._http.post<any>("http://localhost:3000/SupplierList/",data);
}
getSupplier(){
  return this._http.get<any>("http://localhost:3000/SupplierList/");
}
deleteSupplier(id:number): Observable<any>{
  return this._http.delete(`http://localhost:3000/SupplierList/${id}`);
}
getSupplierData(id:number){
  return this._http.get(`http://localhost:3000/SupplierList/${id}`);
}
supplierUpdate(id:number,data: any){
  return this._http.put(`http://localhost:3000/SupplierList/${id}`,data);
}







addemployee1(data:any):Observable<any>{
  return this._http.post('   http://localhost:3000/employee',data)
}
getemployeeList():Observable<any>{
  return this._http.get('  http://localhost:3000/employee')
}
deleteemployee(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/employee/${id}`)
}

getEmployeeData(id:number){
  return this._http.get(`http://localhost:3000/employee/${id}`);
}
employeeUpdate(id:number,data: any){
  return this._http.put(`http://localhost:3000/employee/${id}`,data);
}




addVisitPlan(data:any):Observable<any>{
  return this._http.post('http://localhost:3000/visitplan',data)
}
getVisitPlan():Observable<any>{
  return this._http.get('http://localhost:3000/visitplan')
}
deleteVistPlan(id:number):Observable<any>{
  return this._http.delete('http://localhost:3000/visitplan/${id}')
}
getVisitPlanLists(id:number){
  return this._http.get('http://localhost:3000/visitplan/${id}');
}
visitPlanUpdate(id:number,data: any){
  return this._http.put('http://localhost:3000/visitplan/${id}',data);
}





addstatus1(data:any):Observable<any>{
  return this._http.post('    http://localhost:3000/status',data)
}
getstatuslist():Observable<any>{
  return this._http.get('    http://localhost:3000/status')
}
deletestatus(id:number):Observable<any>{
  return this._http.delete(`  http://localhost:3000/status/${id}`)
}
editstatus(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/status/${id}`)
}
upadtestatus(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/status/${id}`,data)
}



addCategory(data:any):Observable<any>{
  return this._http.post('  http://localhost:3000/category',data)
}
getCategory():Observable<any>{
  return this._http.get('http://localhost:3000/category')
}
deleteCategory(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/category/${id}`)
}
editCategory(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/category/${id}`)
}
updateCategory(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/category/${id}`,data)
}


adddesignation1(data:any):Observable<any>{
  return this._http.post('  http://localhost:3000/designation',data)
}
getdesignation():Observable<any>{
  return this._http.get('  http://localhost:3000/designation')
}
deletedesignation(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/designation/${id}`)
}
editdesignation(id:number):Observable<any>{
  return this._http.get(`  http://localhost:3000/designation/${id}`)
}
upadtedesignation(id,data):Observable<any>{
  return this._http.put(`  http://localhost:3000/designation/${id}`,data)
}



}
