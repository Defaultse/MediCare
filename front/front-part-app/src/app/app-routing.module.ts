import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PatientsComponent }      from './patients/patients.component';
import { PersonalInfoComponent }  from './personal-info/personal-info.component'
import { PatientDetailsComponent } from './patient-details/patient-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsComponent },
  { path: 'personal-info/:id', component: PersonalInfoComponent },
  { path: 'detail/:id', component: PatientDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
