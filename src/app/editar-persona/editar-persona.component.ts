import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../modelo/persona'
import { Catalogo } from '../modelo/catalogo';
import { CatalogoService } from '../servicio/catalogo.service';
import { DropDown } from '../modelo/primeng/dropdown';
import { PersonaService } from '../servicio/persona.service';
import { filter } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  generos: DropDown[] = [];

  persona: Persona;

  constructor(
    private catalogoService: CatalogoService,
    private personaService: PersonaService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.fijarGeneros();
  }

  cambiarEstado(event: boolean): void {
    this.persona.estado = event ? 1 : 0;
  }

  fijarPersona(id: number): void {

    if(id) {
      this.personaService.obtenerPersonaPorId(id).subscribe(
        persona => {
          this.persona = persona;
        }
      );
    } else {
      this.persona = new Persona();
    }
  }

  guardarPersona(event: MouseEvent): void {
    
    this.persistirPersona(this.persona).subscribe(
      persona => {
        this.personaActualizada(persona);
      }
    )
  }

  personaActualizada(persona: Persona): void {

    this.messageService.add({severity:'success', summary:'Guardado', detail:'Persona guardada correctamente'});
    this.persona = persona;
  }

  persistirPersona(persona: Persona): Observable<Persona> {

    if(this.persona.id) {
      return this.personaService.actualizarPersona(persona);
    } 

    return this.personaService.crearPersona(persona);
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

  @Input()
  set id(id: number) {
    this.fijarPersona(id);
  }
}
