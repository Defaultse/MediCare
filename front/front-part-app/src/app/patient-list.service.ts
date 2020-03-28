import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable, of } from 'rxjs';

//HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Error handling
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientlistService{
  patientsUrl = 'api/patients';
  constructor(
    private http: HttpClient
    ) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  getPatients (): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
  }

  getPatient(id: number): Observable<Patient> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get<Patient>(url).pipe(    );
  }

}
