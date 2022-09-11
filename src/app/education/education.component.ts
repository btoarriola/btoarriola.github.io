import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
    let  edu1 = {
      fecha: "2020 - En curso",
      titulo: "Ingenieria de Software (5 semetre actual)",
      nombre: "Universidad Veracruzana. Facultas de Negocios y Tecnologias Ixtac.",
    };
    let  edu2 = {
      fecha: "2017 - 2020",
      titulo: "Profesional Tecnico Baquiller en Informática",
      nombre: "Colegio de Eduacion Profesional Técnica del Estado de Veracruz. Plantel 252 Orizaba",
    };
    let  edu3 = {
      fecha: "2014 - 2017",
      titulo: "Tecnico Medio en Informática",
      nombre: "Escuela Secundaria Técnica Industrial no. 84 Orizaba",
    }
    this.education.push(edu1);
    this.education.push(edu2);
    this.education.push(edu3);
  }

}
