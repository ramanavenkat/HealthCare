import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-c-doctor',
  templateUrl: './admin-c-doctor.component.html',
  styleUrls: ['./admin-c-doctor.component.css']
})
export class AdminCDoctorComponent implements OnInit {

  docData={
    doctorName:'',
    email:'',
    mobileNumber:'',
    specialization:'',
    qualification:'',
    experience:''
  }
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  formDoctor(){
    console.log(this.docData);
    this.authService.saveToDoctor(this.docData).subscribe((data:any) =>{
      console.log(data);
      this.snackBar.open(data.msg,'close',{
        duration:3000
      });
      setTimeout(() => {
        location.href="/admin";
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
