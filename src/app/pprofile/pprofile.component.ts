import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pprofile',
  templateUrl: './pprofile.component.html',
  styleUrls: ['./pprofile.component.css']
})
export class PprofileComponent implements OnInit {

  details:any=[];
  constructor() { }

  ngOnInit(): void {
    this.details=JSON.parse(localStorage.getItem('PatientDetails'));
    console.log(this.details);
  }

}
