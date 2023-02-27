import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto = new Proyecto("","","");

  constructor(public proyectoService : ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data});
  }

}
