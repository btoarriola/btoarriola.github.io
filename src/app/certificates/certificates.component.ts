import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let  cert1 = {
      nombre: "Diseño de escenarios y evacuación de inmuebles",
      fecha: "2021",
      otorga: "Universidad Veracruzana. Vicerrectoría Región Orizaba-Córdoba",
      descripcion : "Ponencia impartida por el TUMII/TIOPC Samuel Valencia Arguelles, Director de Protección Civil del municipio de Ixtaczoquitlán y del TSUUMED Francisco Prieto Maldonado" 
    };
    let  cert2 = {
      nombre: "Ensable de equipo de computo",
      fecha: "2015",
      otorga: "Escuela secundaria tecnica",
      descripcion : "Capacitacion de los elementos que componen una computadora, como darles mantenimiento correctivo y preventivo, ensable de sus componentes e instalación de este." 
    }
    
    this.certificates.push(cert1);
    this.certificates.push(cert2);
  }

}
