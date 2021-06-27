import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-book',
  templateUrl: './p-book.component.html',
  styleUrls: ['./p-book.component.css']
})
export class PBookComponent implements OnInit {

  detail:any=[];
  i:any;
  checked:any=[];
  time:any=[];
  hide:boolean=true;
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.detail=JSON.parse(localStorage.getItem('PatientDetails'));
    this.i=this.detail.id;
    console.log(this.i);
    this.authService.getCoronaDetails(this.i).subscribe((data:any) =>{
      console.log(data);
      this.checked=data.a;
      for(var i=0;i<this.checked.length;i++){
        if(this.checked[i].slot1==true){
          this.time[i]="9:00 AM";
        }
        if(this.checked[i].slot2==true){
          this.time[i]="11:00 AM";
        }
        if(this.checked[i].slot3==true){
          this.time[i]="4:00 PM";
        }
        if(this.checked[i].slot4==true){
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
    if(this.checked.length > 0){
      this.hide=true;
    }
    else{
      this.hide=false;
    }
  }

}
