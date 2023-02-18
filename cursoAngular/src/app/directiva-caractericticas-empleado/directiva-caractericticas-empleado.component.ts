import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';

@Component({
  selector: 'app-directiva-caractericticas-empleado',
  templateUrl: './directiva-caractericticas-empleado.component.html',
  styleUrls: ['./directiva-caractericticas-empleado.component.css']
})
export class DirectivaCaractericticasEmpleadoComponent {

   //Constructor para los servicios:Inyectar el servicio

   constructor(private miServicio:ServicioDirectivasEmpleadosService){} //miServivio es un objeto de tipo ServicioDirectiva..... 

   @Output() caracteristicasEmpleado = new EventEmitter<string>(); //hacemos de esta caracteristica un evento

  anadirCaracteristicas (value:string){
    //Usamos el servicio
    this.miServicio.muestramensaje("La caracterisitica a añair es: " + value) //objeto.metodo
    this.caracteristicasEmpleado.emit(value);
  }

}
