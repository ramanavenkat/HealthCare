import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  generateTocken(){
    console.log(this.loginData);
    this.authService.GenerateTocken(this.loginData).subscribe((data:any) =>{
      console.log(data);
      if(data.jwt!=null && data.model!=null){
        console.log(data);
        alert(data.model.roles);
        if(data.model.roles==="ROLE_USER"){
          this.authService.loginUser(data.jwt,data.pModel,data.model); 
          this.snackBar.open('login Successfull', 'Undo', {
            duration: 3000
          });
          setTimeout(() => {
            location.href= "/patientHome";
          }, 4000);
        }else if(data.model.roles==="ROLE_ADMIN"){
          this.authService.loginUser(data.jwt,data.pModel,data.model); 
          this.snackBar.open('login Successfull', 'Undo', {
            duration: 3000
          });
          setTimeout(() => {
            location.href= "/admin";
          }, 4000);
        }else if(data.model.roles=="ROLE_DOCTOR"){
          this.authService.loginUser(data.jwt,data.dModel,data.model); 
          this.snackBar.open('login Successfull', 'Undo', {
            duration: 3000
          });
          setTimeout(() => {
            location.href="/doctorHome";
          }, 4000);
        }
      }else{
        alert("e;lse");
        this.snackBar.open(data.msg, 'Undo', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
      }
    });
  }

}
