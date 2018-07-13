import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Persona } from '../modelo/persona';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor (
    private http: HttpClient
  ) { }

  crearPersona(persona: Persona): Observable<Persona> {

    return this.http.post<Persona>(
      environment.baseUrl + '/personas',
      persona
    ).pipe(
      map( persona => this.mapearPersona(persona))
    );
  }

  actualizarPersona(persona: Persona): Observable<Persona> {

    return this.http.put<Persona>(
      environment.baseUrl + '/personas/' + `${persona.id}`,
      persona
    ).pipe(
      map( persona => this.mapearPersona(persona))
    );
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {

    return this.http.get<Persona>(
      environment.baseUrl + '/personas/' + `${id}`
    ).pipe(
      map( persona => this.mapearPersona(persona))
    );
  }

  mapearPersona(persona: Persona):Persona {
    
    persona.fechaCreacion = new Date(persona.fechaCreacion);
    persona.fechaNacimiento = new Date(persona.fechaNacimiento);
    return persona;
  }
}
