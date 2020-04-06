import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PatientsComponent }      from './patients/patients.component';
import { PersonalInfoComponent }  from './personal-info/personal-info.component'
import { PatientDetailsComponent } from './patient-details/patient-details.component'
import { AddPatientComponent } from './add-patient/add-patient.component'

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsComponent },
  { path: 'personal-info/:id', component: PersonalInfoComponent },
  { path: 'detail/:id', component: PatientDetailsComponent },
  { path: 'add-patient', component: AddPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
