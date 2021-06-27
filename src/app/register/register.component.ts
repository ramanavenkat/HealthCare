import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { district} from '../shared/district';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData={
    mobileNumber:'',
    name:'',
    email:'',
    password:'',
    guardianName:'',
    state:'',
    district:'',
    city:'',
    pincode:''
  }
  states: Array<any> = [];
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.states=district;
  }
  districts: Array<any> = [];
  change(state) {
    this.districts = this.states.find(con => con.name == state).districts;
  }
  register(){
    console.log(this.registerData)
    this.authService.saveToData(this.registerData).subscribe((data:any) =>{
      console.log(data);
      this.snackBar.open(data.msg,'close',{
        duration:3000
      });
      setTimeout(() => {
        location.href="/login";
      }, 3000);
    })
}
}
