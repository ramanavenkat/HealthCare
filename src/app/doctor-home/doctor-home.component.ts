import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  hide:boolean=true;
  details:any=[];
  checked:any=[];
  i: any;
  d:any;
  requests:any=[];
  time:any=[];
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.details=JSON.parse(localStorage.getItem('PatientDetails'));
    var i=this.details.id;
    // alert(i);
    this.getRequestedData(i);
  }

  getRequestedData(i:any){
    this.authService.getRequest(i).subscribe((data : any) =>{
      console.log(data);
      for(var i=0;i<data.l.length;i++){
        if(data.l[i].status!="Decline"){
          this.checked.push(data.l[i]);
        }
      }
      console.log(this.checked);
      this.d=this.checked.length;
      for(var i=0;i<this.checked.length;i++){
        if(this.checked[i].slot1==true){
          this.time[i]="9:00 AM";
        }
        if(this.checked[i].slot2==true){
          this.time[i]="11:00 AM";
        }
        if(this.checked[i].slot3==true){
          this.time[i]="4:00 PM";
        }
        if(this.checked[i].slot4==true){
          this.time[i]="6:00 PM";
        }
        // if(this.requests[i].status=="Decline"){
        //   console.log(this.requests[i]);
        //   this.requests[i].splice(i,1);
        //   this.i=this.i-1;
        // }
      }
    });
  }
  show(){
    this.hide=false;
  }
  acceptance(i:any,value:any){
    console.log(i+" "+value);
    console.log("Hello");
    console.log(this.checked[i]);
    if(value=="Accept"){
      this.authService.DataForPatient(value,this.checked[i]).subscribe((data: any) =>{
        console.log(data);
        if(data.msg=="success"){
          console.log(data.data);
          this.authService.Delete(data.i).subscribe((response) =>{
            console.log(response);
            if(response){
              this.snackBar.open("Appointment Accepted",'close',{
                duration:2000
              });
              setTimeout(() => {
                location.href="/doctorHome";
              }, 2000);
            }
          })
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
    else{
      this.authService.DaForPatient(value,this.checked[i]).subscribe((data: any) =>{
        console.log(data);
        this.snackBar.open(data.msg,'close',{
          duration:2000
        });
        setTimeout(() => {
          location.href="/doctorHome";
        }, 2000);
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
}

