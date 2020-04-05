import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[]
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);
  }


}
