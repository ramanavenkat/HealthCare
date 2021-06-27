import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  hide:boolean=true;
  details:any=[];
  name:any;
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null){
      this.hide=false;
    }
    else{
      this.hide=true;
      this.details=JSON.parse(localStorage.getItem('PatientDetails'));
      if(this.details.roles=="ROLE_USER" || this.details.roles=="ROLE_ADMIN"){
        this.name=this.details.name;
      }
      else{
        this.name=this.details.doctorName;
      }
    }
  }
  log(){
    this.authService.logout().subscribe((data:any) =>{
      console.log(data); 
      if(data.msg){
        this.snackBar.open(data.msg,'close',{
          duration:3000
        });
        setTimeout(() => {
          localStorage.clear();
          location.href="/login";
        }, 3000);
        
      }
    })
  }
  

}
