import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { GrowlModule } from 'primeng/growl';
import { DataViewModule } from 'primeng/dataview';
import { MessageService } from 'primeng/components/common/messageservice';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './configuracion/interceptor/interceptors';
import { EstadoBooleanPipe } from './configuracion/pipes/estado-boolean.pipe';
import { PersonaBusquedaComponent } from './persona-busqueda/persona-busqueda.component';
import { AdministracionPersonasComponent } from './administracion-personas/administracion-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarPersonaComponent,
    EstadoBooleanPipe,
    PersonaBusquedaComponent,
    AdministracionPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    PanelModule,
    InputSwitchModule,
    AppRoutingModule,
    HttpClientModule,
    GrowlModule,
    DataViewModule,
    PaginatorModule,
    DialogModule
  ],
  providers: [
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
