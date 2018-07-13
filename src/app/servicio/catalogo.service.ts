import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Catalogo } from '../modelo/catalogo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerGeneros(): Observable<Catalogo[]> {
    
    return this.obtenerCatalogo('GNRO');
  }

  obtenerCatalogo(categoria: string): Observable<Catalogo[]> {

    const params = { params: new HttpParams().set('abreviacion', categoria) };

    return this.http.get<Catalogo[]>(
      environment.baseUrl + '/catalogos/categoria', params
    );
  }
}
