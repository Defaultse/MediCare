import { Component, OnInit } from '@angular/core';
import { Patient } from '../models';
import { PatientService } from '../patient/patient.service'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = []
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList(): void {
    this.patientService.getPatientList()
    .subscribe(patients => this.patients = patients);
  }

  deletePatient(patient: Patient): void {
    this.patients = this.patients.filter(p => p !== patient);
    this.patientService.deletePatient(patient).subscribe();
  }

}
