import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaComponent } from './persona/persona.component';
import { PersonaBusquedaComponent } from './persona-busqueda/persona-busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/personas/busqueda', pathMatch: 'full' },
  { path: 'personas', component: PersonaComponent },
  { path: 'personas/busqueda', component: PersonaBusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
