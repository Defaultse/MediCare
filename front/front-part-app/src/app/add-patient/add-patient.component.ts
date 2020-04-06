import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.patientService.addPatient({ name } as Patient)
      .subscribe(patient => {
        this.patients.push(patient);
      });
  }


}
