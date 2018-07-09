import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona'
import { Catalogo } from '../modelo/catalogo';
import { CatalogoService } from '../servicio/catalogo.service';
import { DropDown } from '../util/dropdown';
import { PersonaService } from '../servicio/persona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  generos: DropDown[];

  persona: Persona;

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService,
    private personaService: PersonaService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => console.log(params['id']));

    this.fijarGeneros();
    this.fijarPersona();
  }

  fijarPersona(): void {

    this.personaService.obtenerPersonaPorId(1).subscribe(
      persona => {
        this.persona = persona;
      }
    )
  }

  fijarGeneros(): void {

    this.catalogoService.obtenerGeneros().subscribe(
      generos => {
        this.generos = this.mapearGeneros(generos);
      }
    );
  }

  mapearGeneros(generos: Catalogo[]): DropDown[] {

    return generos.map((genero) => {
      return {
        label: genero.nombre,
        value: genero.id
      };
    });
  }
}
