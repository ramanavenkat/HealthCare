import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin:boolean=false;
  doctor:boolean=false;
  patient:boolean=false;
  login:boolean=true;
  Details:any=[];
  name:any;
  constructor() { }

  ngOnInit(): void {
    
    $(document).ready(function () {
      $('#dismiss, .overlay').on('click', function () {
          $('#sidebar').removeClass('active');
          $('.overlay').removeClass('active');
      });
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').addClass('active');
          $('.overlay').addClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    });
    // console.log(localStorage.getItem('PatientDetails'));
    this.Details=JSON.parse(localStorage.getItem('PatientDetails'));
    // alert(localStorage.getItem('token'));
  if(localStorage.getItem('token')==null){
    this.login=true;
  }
  else{
    this.login=false;
    console.log("Hello");
    if(this.Details.roles=="ROLE_ADMIN"){
      this.admin=true;
      this.name=this.Details.name;
    }
    if(this.Details.roles=="ROLE_DOCTOR"){
      this.doctor=true;
      this.name=this.Details.doctorName;
    }
    if(this.Details.roles=="ROLE_USER"){
      this.patient=true;
      this.name=this.Details.name;
    }
  }
  }
  click(){
    location.href="patientHome/#aapp"
  }

}
