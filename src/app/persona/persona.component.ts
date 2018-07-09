import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = {
    primerNombre: "Mateo",
    segundoNombre: "Sebastian",
    primerApellido: "Rojas",
    cedula: "1726020074",
    idGenero: 1,
    idPersona: 10,
    callePrincipal: "Antonio de Ulloa",
    calleSecundaria: "Rumipamba",
    celular: "0988817485",
    email:"mateo.rojas@udla.edu.ec",
    estado: true,
    fechaNacimiento: new Date(),
    numeracionDomicilio: "N34-141",
    referencia: "Frente a Top Seg",
    segundoApellido: "Ortiz",
    telefonoPrincipal: "2245155",
    telefonoSecundario: "3318998",
    fechaCreacion: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

}
