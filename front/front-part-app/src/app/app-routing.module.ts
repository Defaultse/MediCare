import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import { PatientsComponent }      from './patients/patients.component';
import { PersonalInfoComponent }  from './personal-info/personal-info.component'
import { PatientDetailsComponent } from './patient-details/patient-details.component'
import { AddPatientComponent } from './add-patient/add-patient.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'personal-info/:id', component: PersonalInfoComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'add-patient', component: AddPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
