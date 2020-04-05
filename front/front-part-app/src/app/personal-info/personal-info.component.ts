import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Doctor }         from '../doctor/doctor';
import { DoctorService }  from '../doctor/doctor.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  doctor: Doctor;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doctorService.getDoctor(id)
      .subscribe(doctor => this.doctor = doctor);
  }
}
