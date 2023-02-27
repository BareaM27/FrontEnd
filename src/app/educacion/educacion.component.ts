import { Component, OnInit } from '@angular/core';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion = new Educacion("","","","");

  constructor(public educacionService : EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data});
  }

}
