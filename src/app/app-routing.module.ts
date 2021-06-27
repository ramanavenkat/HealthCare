import { PBookComponent } from './p-book/p-book.component';
import { PRequestsComponent } from './p-requests/p-requests.component';
import { PprofileComponent } from './pprofile/pprofile.component';
import { DoctorBookComponent } from './doctor-book/doctor-book.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { AdminCDoctorComponent } from './admin-c-doctor/admin-c-doctor.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminCdoctor",component:AdminCDoctorComponent},
  {path:"patientHome",component:PatientHomeComponent},
  {path:"doctorDetails", component:DoctorDetailsComponent},
  {path:"doctorHome",component:DoctorHomeComponent},
  {path:"adminPatient",component:AdminPatientComponent},
  {path:"aProfile",component:AprofileComponent},
  {path:"dProfile",component:DoctorProfileComponent},
  {path:"dBook",component:DoctorBookComponent},
  {path:"pProfile",component:PprofileComponent},
  {path:"pRequest",component:PRequestsComponent},
  {path:"pBook",component:PBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
