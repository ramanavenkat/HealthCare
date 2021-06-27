import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctorData:any=[];
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.authService.getAllDoctors().subscribe((data:any) =>{
      console.log(data);
      this.doctorData=data;
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
  delete(id:any){
    this.authService.deleteDoctor(id).subscribe((data:any) =>{
      console.log(data);
      this.snackBar.open(data.msg,'close',{
        duration:3000
      });
      setTimeout(() => {
        location.href="/doctorDetails";
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
