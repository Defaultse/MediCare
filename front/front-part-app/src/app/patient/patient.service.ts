import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsUrl = 'api/patients';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
  ) { }

  getPatients (): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Patient[]>('getPatients', []))
      );
  }

  getPatient(id: number): Observable<Patient> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get<Patient>(url).pipe(
      tap(_ => this.log(`fetched patient id=${id}`)),
      catchError(this.handleError<Patient>(`getPatient id=${id}`))
    );
  }

  addPatient (patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientsUrl, patient, this.httpOptions).pipe(
      tap((newPatient: Patient) => this.log(`added patient w/ id=${newPatient.id}`)),
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  deletePatient (patient: Patient | number): Observable<Patient> {
    const id = typeof patient === 'number' ? patient : patient.id;
    const url = `${this.patientsUrl}/${id}`;

    return this.http.delete<Patient>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted patient id=${id}`)),
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
     return of(result as T);
    };
  }

  private log(message: string) {}
  
}
