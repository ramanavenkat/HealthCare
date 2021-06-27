import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import * as moment from 'moment'
import {DatePipe} from '@angular/common'
@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  ser:Date;
  specialization=['Cardiologist','Neurosurgeon','Orthopaedic','ENT','Dentist','Urologist','Gynecologist','Oncologist'];
  doctorsData:any=[];
  booleaArray=new Array<boolean>();
  res:any;
  fDate:any;
  hide:boolean=true;
  listAppointments:any=[];
  dive:boolean=false;
  check1:boolean=true;
  check2:boolean=true;
  check3:boolean=true;
  check4:boolean=true;
  danger:boolean=true;
  pass1:boolean=false;
  pass2:boolean=false;
  pass3:boolean=false;
  pass4:boolean=false;
  books:any=[];
  constructor(private authService:AuthService, private datePipe:DatePipe,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.ser=new Date();
    this.books=JSON.parse(localStorage.getItem('PatientDetails'));
    console.log(this.books);
  }

  get(i:any){
    console.log(this.specialization[i]);
    this.authService.getDoctors(this.specialization[i]).subscribe((data:any) =>{
      console.log(data)
      this.doctorsData=data;
      this.booleaArray=new Array<boolean>(this.doctorsData.length);
      // console.log(booleaArray.length);
      this.booleaArray.fill(false);
      // console.log(booleaArray);
      console.log(this.doctorsData);
      if(this.doctorsData!=null){
        alert("Data formed");
        this.hide=false;
      }else{
        alert("No Data Found");
      }
    }, (err) => {
      console.log(err.error.error);
      if(err.error.error=="Forbidden")  {
        this.snackBar.open('Invalid Request! Please Login In...', 'close', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
        
      }
        
    })
  }
  getAvaliablity(i:any,id:any,res:any){
    this.booleaArray[i]=true;
    // let tDate=moment(date, 'YYYY-MM-DD');
    console.log(res);
    this.fDate=this.datePipe.transform(res,"dd-MM-yyyy");
    console.log(this.fDate);
    console.log(typeof this.fDate);
    let obj={
      'doctorId':id,
      'date':this.fDate
    }
    console.log(obj);
    this.authService.getAppointment(obj).subscribe((data:any) =>{
      console.log(data);
      this.listAppointments=data;
      console.log(this.listAppointments);
      if(this.listAppointments.length==0){
        this.check1=true;
        this.check2=true;
        this.check3=true;
        this.check4=true;
        this.danger=true;
        this.dive=true;
      }
      else{
        for(var i=0;i<this.listAppointments.length;i++){
          if(this.listAppointments[i].slot1==true){
            this.check1=!this.listAppointments[i].slot1
          }
          if(this.listAppointments[i].slot2==true){
            this.check2=!this.listAppointments[i].slot2
          }
          if(this.listAppointments[i].slot3==true){
            this.check3=!this.listAppointments[i].slot3
          }
          if(this.listAppointments[i].slot4==true){
            this.check4=!this.listAppointments[i].slot4
          }
        }
        if(this.check1 || this.check2 || this.check3 || this.check4){
          alert(this.check1);
          this.danger=true;
        }else{
          this.danger=false;
        }
        this.dive=true;
      }
    }, (err) => {
      console.log(err.error.error);
      if(err.error.error=="Forbidden")  {
        this.snackBar.open('Invalid Request! Please Login In...', 'close', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
        
      }
        
    })
  }
  onClick(event:any){
    this.pass1=false;
    this.pass2=false;
    this.pass3=false;
    this.pass4=false;
    console.log(event);
    if(event=="nine"){
      this.pass1=true;
    }
    if(event=="eleven"){
      this.pass2=true;
    }
    if(event=="four"){
      this.pass3=true;
    }
    if(event=="six"){
      this.pass4=true;
    }
  }
  getBooked(id:any,name:any){
    console.log("Hello doctor : "+name);
    console.log("fDate"+this.fDate);
    console.log(this.pass1,this.pass2,this.pass3,this.pass4);
    console.log(this.books.id);
    let object={
      'doctorId':id,
      'patientId':this.books.id,
      'patientName':this.books.name,
      'date':this.fDate,
      'doctorName':name,
      'slot1':this.pass1,
      'slot2':this.pass2,
      'slot3':this.pass3,
      'slot4':this.pass4
    }
    console.log(object);
    this.authService.bookAppointment(object).subscribe((data:any) =>{
      console.log(data);
      this.snackBar.open(data.msg,'close',{
        duration:3000
      });
      setTimeout(() => {
        location.href="/patientHome";
      }, 3000);
    }, (err) => {
      console.log(err.error.error);
      if(err.error.error=="Forbidden")  {
        this.snackBar.open('Invalid Request! Please Login In...', 'close', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
        
      }
        
    })
  }

}
