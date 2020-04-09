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

  add(name: string, status: string, drugs:string, details:string): void {
    name = name.trim();
    status = status.trim();
    drugs = drugs.trim();
    details = details.trim();
    if (!name && !status && !drugs && !details) { return; }
    this.patientService.addPatient({ name, status, drugs, details } as Patient)
      .subscribe(patient => {
        this.patients.push(patient);
      });
  }


}
