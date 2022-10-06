import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Alumno, Payload } from '../interfaces/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllStundents(): Observable<Payload[]>{
    const url = 'http://localhost:3500/api/alumnos';

    return this.http.get<Alumno>(url, this.httpOptions).pipe(
      map((response: Alumno)=>{
        return response.payload
      })
    );
  }
}
