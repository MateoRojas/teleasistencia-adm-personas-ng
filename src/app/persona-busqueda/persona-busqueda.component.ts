import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../modelo/persona';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-persona-busqueda',
  templateUrl: './persona-busqueda.component.html',
  styleUrls: ['./persona-busqueda.component.css']
})
export class PersonaBusquedaComponent implements OnInit {

  @Input() boton: string;
  @Input() nombre: string;
  @Input() cedula: string;
  
  @Output() botonPresionado:EventEmitter<number>;

  personas: Persona[];

  pagina: number;
  totalElementos: number;
  primeraFila: number; 
  maximo: number;

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.valoresIniciales();
    this.fijarPersonas(this.cedula, this.nombre, this.pagina, this.maximo);
  }

  valoresIniciales() {
    this.pagina = 1;
    this.totalElementos = 0;
    this.maximo = 10;
    this.personas = [];
    this.primeraFila = 0;
    this.botonPresionado = new EventEmitter();
  }

  paginador(event) {
    this.pagina = event.page + 1;
    this.primeraFila = event.first;
    this.fijarPersonas(this.cedula, this.nombre, this.pagina, this.maximo);
  }

  fijarPersonas(cedula: string, nombre: string, pagina: number, maximo: number) {
    this.personaService.buscarPersonasPorFiltros(cedula, nombre, pagina, maximo).subscribe(
      paginado => {
        this.personas = paginado.datos;
        this.pagina = paginado.numeroPagina;
        this.totalElementos = paginado.totalElementos;
      }
    )
  }

  buscarPersonas(event) {
    this.pagina = 1;
    this.totalElementos = 0;
    this.primeraFila = 0;
    this.fijarPersonas(this.cedula, this.nombre, this.pagina, this.maximo);
  }

  eventoBoton(event: MouseEvent, id: number) {
    this.botonPresionado.emit(id);
  }

}
