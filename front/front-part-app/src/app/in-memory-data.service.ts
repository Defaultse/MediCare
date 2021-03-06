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
      { id: 11, name: 'Dr House', image: 'https://scontent.fala4-2.fna.fbcdn.net/v/t1.0-1/22788850_1987957774821633_7315756874233524202_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=yBzLqqDjc-0AX_Ax954&_nc_ht=scontent.fala4-2.fna&oh=aab0473c7775fb37492a44f1368eba33&oe=5EB529AE', type_of_activity: 'Онколог', awards: "Қазақстан Республикасының Денсаулық сақтау ісінің Үздігі"},
      { id: 12, name: 'Dr Doom', image:'', type_of_activity: 'Хирург', awards: "Қазақстан Республикасының Денсаулық сақтау ісінің Үздігі" },
      { id: 13, name: 'Dr Manhattan', image:'', type_of_activity: 'Окулист', awards: "Қазақстан Республикасының Денсаулық сақтау ісінің Үздігі" },
    ];
    const patients = [
      { id: 11, name: 'Dr Nice', doctor_id: 11,   status: "Длительный курс лечения", drugs: "Терафлю, антигрипин" ,details: "Цитрамон по 2 таблетки в день до обеда."},
      { id: 12, name: 'Narco',   doctor_id: 12,    status: "Интенсивный курс лечения", drugs: "Терафлю, антигрипин" ,details: "Цитрамон по 2 таблетки в день до обеда." },
      { id: 13, name: 'Bombasto',  doctor_id: 12,  status: "Закончен", drugs: "Терафлю, антигрипин" ,details: "Цитрамон по 2 таблетки в день до обеда." },
      { id: 14, name: 'Celeritas', doctor_id: 11, status: "Длительный курс лечения",drugs: "Терафлю, антигрипин" ,details: "Цитрамон по 2 таблетки в день до обеда." },
      { id: 15, name: 'Magneta', doctor_id: 11,   status: "Длительный курс лечения", drugs:"", details:""},
      { id: 16, name: 'RubberMan', doctor_id: 12, status: "Длительный курс лечения", drugs:"", details:""},
      { id: 17, name: 'Dynama', doctor_id: 11 ,   status: "Интенсивный курс лечения",drugs:"", details:""},
      { id: 18, name: 'Dr IQ', doctor_id: 13,     status: "Длительный курс лечения", drugs:"", details:""},
      { id: 19, name: 'Magma', doctor_id: 12,     status: "Длительный курс лечения", drugs:"", details:""},
      { id: 20, name: 'Tornado', doctor_id: 11,   status: "Длительный курс лечения", drugs:"", details:""}
    ];
    const patients_courses = [
      { id: 11, name: 'Dr Nice', doctor_id: 11,   status: "Длительный курс лечения"},
      
    ];
    return {patients,doctors, patients_courses};
  }


  genId(patients: Patient[]): number {
    return patients.length > 0 ? Math.max(...patients.map(hero => hero.id)) + 1 : 11;
  }
}