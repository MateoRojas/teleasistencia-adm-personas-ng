import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  obtenerPersonaPorId(id: number): Observable<Persona> {

    return of({
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
    });
  }
}
