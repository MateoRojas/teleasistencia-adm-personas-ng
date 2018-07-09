import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalogo } from '../modelo/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor() { }

  obtenerGeneros(): Observable<Catalogo[]> {

    return of([
      {
        id: 1,
        abreviacion: "MSNO",
        nombre: "Masculino",
        descripcion: "Genero Masculino"
      },
      {
        id: 2,
        abreviacion: "FMNO",
        nombre: "Femenino",
        descripcion: "Genero Femenino"
      }
    ]);
  }
}
