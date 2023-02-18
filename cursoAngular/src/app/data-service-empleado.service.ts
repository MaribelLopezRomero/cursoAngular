import { Injectable } from '@angular/core';
import { Empleado } from './directivas-empleados/empleadoModel';
import { ServicioDirectivasEmpleadosService } from './servicio-directivas-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceEmpleadoService {

  //Inyectar el servicio de la ventana emergente

  constructor(private servicioVentanaEmergente: ServicioDirectivasEmpleadosService) { }

  empleados:Empleado[]=[

    new Empleado("maribel", "lopez", "presidenta", 10000),
    new Empleado("rocio", "lopez", "subpresidenta", 10000),
    new Empleado("candela", "romero", "dueña", 10000),
  ];

  agregarEmpleado(empleado:Empleado){

    //usamos el servicio

    this.servicioVentanaEmergente.muestramensaje("El nombre del empleado que vas a añadir es: " + empleado.nombre)

    this.empleados.push(empleado);

  }

}
