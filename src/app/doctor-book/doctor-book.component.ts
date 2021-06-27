import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-book',
  templateUrl: './doctor-book.component.html',
  styleUrls: ['./doctor-book.component.css']
})
export class DoctorBookComponent implements OnInit {

  time:any=[];
  BookAppoint:any=[];
  details:any=[];
  id:any;
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.details=JSON.parse(localStorage.getItem('PatientDetails'));
    this.id=this.details.id;
    this.authService.getDBAppoint(this.id).subscribe((data:any) =>{
      console.log(data);
      this.BookAppoint=data.a;
      for(var i=0;i<this.BookAppoint.length;i++){
        if(this.BookAppoint[i].slot1==true){
          this.time[i]="9:00 AM";
        }
        if(this.BookAppoint[i].slot2==true){
          this.time[i]="11:00 AM";
        }
        if(this.BookAppoint[i].slot3==true){
          this.time[i]="4:00 PM";
        }
        if(this.BookAppoint[i].slot4==true){
          this.time[i]="6:00 PM";
        }
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

}
