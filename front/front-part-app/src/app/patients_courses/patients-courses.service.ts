import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PatientsCourses } from './patients-courses';

@Injectable({
  providedIn: 'root'
})
export class PatientsCoursesService {

  constructor() { }
}
