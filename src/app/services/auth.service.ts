import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  length() {
    throw new Error("Method not implemented.");
  }

  httpOptions = {
    headers: new HttpHeaders({      
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
  constructor(private http:HttpClient) { }

  public GenerateTocken(loginData:any){
    console.log(loginData)
    return this.http.post(`http://localhost:8080/login`,loginData);
  }
  public saveToData(registerData:any){
    console.log(registerData);
    return this.http.post(`http://localhost:8080/save`,registerData);
  }
  public loginUser(token:any,PatientDetails : any,model:any)
  {
    localStorage.setItem('token',token);
    delete PatientDetails.password;
    delete model.password;
    localStorage.setItem('PatientDetails',JSON.stringify(PatientDetails));
    localStorage.setItem('model',JSON.stringify(model));
    return true;
  }
  public saveToDoctor(docData:any){
    return this.http.post(`http://localhost:8080/doctorSave`,docData,this.httpOptions);
  }
  public logout(){
    return this.http.get(`http://localhost:8080/logout`,this.httpOptions);
  }
  public getDoctors(data:any){
    console.log(data);
    return this.http.get(`http://localhost:8080/getDoctor/${data}`,this.httpOptions);
  }
  public getAppointment(obj:any){
    console.log(obj);
    return this.http.post(`http://localhost:8080/getAppointment`,obj,this.httpOptions);
  }
  public bookAppointment(object:any){
    console.log(object);
    return this.http.post(`http://localhost:8080/saveToDAppointment`,object,this.httpOptions);
  }
  public getRequest(i:any){
    return this.http.get(`http://localhost:8080/getRequests/${i}`,this.httpOptions);
  }
  public DataForPatient(value:any,obj:any){
    console.log(obj);
    return this.http.post(`http://localhost:8080/saveToAppoint/${value}`,obj,this.httpOptions);
  }
  public DaForPatient(value:any,obj:any){
    console.log(obj);
    return this.http.post(`http://localhost:8080/saveToDAppoint/${value}`,obj,this.httpOptions);
  }
  public Delete(i:any){
    console.log("Hello world");
    console.log(i);
    return this.http.delete(`http://localhost:8080/delete/${i}`,this.httpOptions);
  }
  public getCount(){
    return this.http.get(`http://localhost:8080/count`,this.httpOptions);
  }
  public getAllDoctors(){
    return this.http.get(`http://localhost:8080/getADoctors`,this.httpOptions);
  }
  public getAllPatients(){
    return this.http.get(`http://localhost:8080/getAPatient`,this.httpOptions);
  }
  public deleteDoctor(id:any){
    return this.http.delete(`http://localhost:8080/deleteDoctor/${id}`,this.httpOptions);
  }
  public getDBAppoint(id:any){
    return this.http.get(`http://localhost:8080/getDBA/${id}`,this.httpOptions);
  }
  public getRequested(id:any){
    return this.http.get(`http://localhost:8080/getCorona/${id}`,this.httpOptions);
  }
  public getCoronaDetails(id:any){
    return this.http.get(`http://localhost:8080/fever/${id}`,this.httpOptions);
  }
}
