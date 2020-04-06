import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Patient } from './patient/patient';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor/doctor';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const doctors = [
      { id: 11, name: 'Dr House', image: 'C:\Users\User\Desktop\MediCare\images\Dr hause.jpg'},
      { id: 12, name: 'Dr Doom', image:'' },
      { id: 13, name: 'Dr Manhattan', image:'' },
    ];
    const patients = [
      { id: 11, name: 'Dr Nice', doctor_id: 11,   status: "Длительный курс лечения"},
      { id: 12, name: 'Narco',   doctor_id: 12,    status: "Интенсивный курс лечения" },
      { id: 13, name: 'Bombasto',  doctor_id: 12,  status: "Закончен" },
      { id: 14, name: 'Celeritas', doctor_id: 11, status: "Длительный курс лечения" },
      { id: 15, name: 'Magneta', doctor_id: 11,   status: "Длительный курс лечения" },
      { id: 16, name: 'RubberMan', doctor_id: 12, status: "Длительный курс лечения" },
      { id: 17, name: 'Dynama', doctor_id: 11 ,   status: "Интенсивный курс лечения" },
      { id: 18, name: 'Dr IQ', doctor_id: 13,     status: "Длительный курс лечения" },
      { id: 19, name: 'Magma', doctor_id: 12,     status: "Длительный курс лечения" },
      { id: 20, name: 'Tornado', doctor_id: 11,   status: "Длительный курс лечения" }
    ];
    return {patients,doctors};
  }


  genId(patients: Patient[]): number {
    return patients.length > 0 ? Math.max(...patients.map(hero => hero.id)) + 1 : 11;
  }
}