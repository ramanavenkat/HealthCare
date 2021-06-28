import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './admin/admin.component';
import { AdminCDoctorComponent } from './admin-c-doctor/admin-c-doctor.component';
import { HeaderComponent } from './header/header.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import {MatButtonModule} from '@angular/material/button';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DatePipe } from '@angular/common';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { PprofileComponent } from './pprofile/pprofile.component';
import { DoctorBookComponent } from './doctor-book/doctor-book.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PRequestsComponent } from './p-requests/p-requests.component';
import { PBookComponent } from './p-book/p-book.component';
import { FooterComponent } from './footer/footer.component';
import { CheckComponent } from './check/check.component';
import { CheckAppointmentComponent } from './check-appointment/check-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminCDoctorComponent,
    HeaderComponent,
    PatientHomeComponent,
    DoctorDetailsComponent,
    DoctorHomeComponent,
    AdminPatientComponent,
    AprofileComponent,
    PprofileComponent,
    DoctorBookComponent,
    DoctorProfileComponent,
    PRequestsComponent,
    PBookComponent,
    FooterComponent,
    CheckComponent,
    CheckAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [HttpClientModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
