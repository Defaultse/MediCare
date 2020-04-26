import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Patient }         from '../models';
import { PatientService }  from '../patient/patient.service';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient;

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.patientService.getPatient(id).subscribe(patient => this.patient = patient);
  }
  

}
