import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AprofileComponent implements OnInit {

  details:any=[];
  constructor() { }

  ngOnInit(): void {
    this.details=JSON.parse(localStorage.getItem('PatientDetails'));
    console.log(this.details);
  }

}
