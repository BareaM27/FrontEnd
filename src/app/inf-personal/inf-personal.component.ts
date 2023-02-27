import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-inf-personal',
  templateUrl: './inf-personal.component.html',
  styleUrls: ['./inf-personal.component.css']
})
export class InfPersonalComponent implements OnInit {

  persona: Persona = new Persona("","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

}