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
import { MessageService } from 'primeng/components/common/messageservice';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './configuracion/interceptor/interceptor';
import { EstadoBooleanPipe } from './configuracion/pipes/estado-boolean.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    EstadoBooleanPipe
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
    GrowlModule
  ],
  providers: [
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
