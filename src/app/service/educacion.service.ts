import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = "http://localhost:8080/educacion";

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable <Educacion>{
    return this.http.get<Educacion> (this.URL + "/traer")
  }
}