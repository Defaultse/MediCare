import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { FormsModule }    from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

import {AuthInterceptor} from "./auth.interceptor";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { routing } from './app.routing';

// import { JwtInterceptor } from './_helpers';
// import { HomeComponent } from './home';
// import { LoginComponent } from './login';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PersonalInfoComponent,
    PatientDetailsComponent,
    AddPatientComponent,
    // LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // LoginComponent
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    // {
    //    provide: HTTP_INTERCEPTORS,
    // //   useClass:  JwtInterceptor,
    // //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
