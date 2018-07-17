import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-personas',
  templateUrl: './administracion-personas.component.html',
  styleUrls: ['./administracion-personas.component.css']
})
export class AdministracionPersonasComponent implements OnInit {

  nombre: string;
  cedula: string;

  id: number;

  popUpEditarPersona: boolean;

  constructor() { }

  ngOnInit() {
  }

  valoresIniciales(): void {
    this.popUpEditarPersona = false;
    this.id = 0;
  }

  cerrarPopUpEditarPersona(event: MouseEvent): void {
    this.popUpEditarPersona = false;
  }

  agregarPersona(event: MouseEvent): void {
    this.id = 0;
    this.popUpEditarPersona = true;
  }

  editarPersona(id: number): void {
    this.id = id;
    this.popUpEditarPersona = true;
  }
}
