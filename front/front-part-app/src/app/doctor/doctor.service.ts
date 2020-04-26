import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Doctor, LoginResponse} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) {}

  getDoctorList(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.BASE_URL}/api/doctor/`);
  }

  getDoctor(id): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.BASE_URL}/api/doctor/${id}/`);
  }

  // deleteCategory(id): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/api/doctor/${id}/`);
  // }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
// import { Doctor } from './doctor';

// @Injectable({
//   providedIn: 'root'
// })
// export class DoctorService{
//   private doctorsUrl = 'api/doctors';  
//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
  
//   constructor(
//     private http: HttpClient,
//   ) { }

//   getDoctor(id: number): Observable<Doctor> {
//     const url = `${this.doctorsUrl}/${id}`;
//     return this.http.get<Doctor>(url).pipe(
//       tap(_ => this.log(`fetched patient id=${id}`)),
//       catchError(this.handleError<Doctor>(`getDoctor id=${id}`))
//     );
//   }

//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//      console.error(error); 
//       this.log(`${operation} failed: ${error.message}`);
//      return of(result as T);
//     };
//   }

//   private log(message: string) {}
  
// }
