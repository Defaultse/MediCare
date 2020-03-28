﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

import {Patient} from '../patient'
import {PatientlistService} from '../patient-list.service'

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];

    selectedPatient: Patient;
    patients: Patient[]
    constructor(private userService: UserService,
        private patientlistService:PatientlistService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
        this.getPatients();
    }

    getPatients():void{
        this.patientlistService.getPatients().subscribe(patients => this.patients = patients)
    }
}