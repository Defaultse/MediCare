import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Patient } from './patient/patient';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor/doctor';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 11, name: 'Dr Nice', status: "Длительный курс лечения"},
      { id: 12, name: 'Narco', status: "Интенсивный курс лечения" },
      { id: 13, name: 'Bombasto', status: "Закончен" },
      { id: 14, name: 'Celeritas', status: "Длительный курс лечения" },
      { id: 15, name: 'Magneta', status: "Длительный курс лечения" },
      { id: 16, name: 'RubberMan', status: "Длительный курс лечения" },
      { id: 17, name: 'Dynama', status: "Интенсивный курс лечения" },
      { id: 18, name: 'Dr IQ', status: "Длительный курс лечения" },
      { id: 19, name: 'Magma', status: "Длительный курс лечения" },
      { id: 20, name: 'Tornado', status: "Длительный курс лечения" }
    ];
    return {patients};

    const doctors = [
      { id: 11, name: 'Dr House' },
    ];
    return {doctors};
  }


  genId(patients: Patient[]): number {
    return patients.length > 0 ? Math.max(...patients.map(hero => hero.id)) + 1 : 11;
  }

  genId1(doctors: Doctor[]): number {
    return doctors.length > 0 ? Math.max(...doctors.map(doctor => doctor.id)) + 1 : 11;
  }
}