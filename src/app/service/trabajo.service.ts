import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../models/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  URL = "http://localhost:8080/trabajo";

  constructor(private http: HttpClient) { }

  public getTrabajo(): Observable <Trabajo>{
    return this.http.get<Trabajo> (this.URL + "/traer")
  }
}
