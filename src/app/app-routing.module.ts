import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionPersonasComponent } from './administracion-personas/administracion-personas.component';

const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' },
  { path: 'personas', component: AdministracionPersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
