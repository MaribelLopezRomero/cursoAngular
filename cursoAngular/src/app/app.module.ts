import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MiniCalculadoraComponent } from './mini-calculadora/mini-calculadora.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DirectivasEmpleadosComponent } from './directivas-empleados/directivas-empleados.component';
import { DirectivaEmpleadoHijoComponent } from './directiva-empleado-hijo/directiva-empleado-hijo.component';
import { DirectivaCaractericticasEmpleadoComponent } from './directiva-caractericticas-empleado/directiva-caractericticas-empleado.component';
import { ServicioDirectivasEmpleadosService } from './servicio-directivas-empleados.service';
import { ServiciosEmpleadoComponent } from './servicios-empleado/servicios-empleado.component';
import { DataServiceEmpleadoService } from './data-service-empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    MiniCalculadoraComponent,
    DirectivasComponent,
    DirectivasEmpleadosComponent,
    DirectivaEmpleadoHijoComponent,
    DirectivaCaractericticasEmpleadoComponent,
    ServiciosEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioDirectivasEmpleadosService, DataServiceEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
