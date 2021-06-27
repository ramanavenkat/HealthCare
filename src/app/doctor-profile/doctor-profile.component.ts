import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  details:any=[];
  constructor() { }

  ngOnInit(): void {
    this.details=JSON.parse(localStorage.getItem('PatientDetails'));
    console.log(this.details);
  }

}
