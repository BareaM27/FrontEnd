import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../models/trabajo';
import { TrabajoService } from '../service/trabajo.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajo: Trabajo = new Trabajo("","","","");

  constructor(public trabajoService : TrabajoService) { }

  ngOnInit(): void {
    this.trabajoService.getTrabajo().subscribe(data => {this.trabajo = data});
  }

}
