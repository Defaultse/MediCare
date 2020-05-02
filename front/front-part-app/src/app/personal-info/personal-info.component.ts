import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Doctor }         from '../doctor/doctor';
import { DoctorService }  from '../doctor/doctor.service';

import { Doctor } from "../models";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  doctor: Doctor;

  constructor(public doctorService: DoctorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDoctorList();
  }

  getDoctorList() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.doctorService.getDoctor(2).subscribe(doctor => this.doctor = doctor);
  }

  // doctor: Doctor;

  // constructor(
  //   private route: ActivatedRoute,
  //   private doctorService: DoctorService,
  //   private location: Location
  // ) { }

  // ngOnInit(): void {
  //   this.getDoctor();
  // }

  // getDoctor(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.doctorService.getDoctor(id)
  //     .subscribe(doctor => this.doctor = doctor);
  // }
}
