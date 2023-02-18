import { Component } from '@angular/core';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';
import { Empleado } from './empleadoModel';

@Component({
  selector: 'app-directivas-empleados',
  templateUrl: './directivas-empleados.component.html',
  styleUrls: ['./directivas-empleados.component.css']
})
export class DirectivasEmpleadosComponent {

  titulo="Formulario de empleados";

  //instancioamos los objetos

  empleados:Empleado[]=[

    new Empleado("maribel", "lopez", "presidenta", 10000),
    new Empleado("rocio", "lopez", "subpresidenta", 10000),
    new Empleado("candela", "romero", "dueña", 10000),
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  //Constructor para los servicios:Inyectar el servicio

  constructor(private miServicio:ServicioDirectivasEmpleadosService){} //miServivio es un objeto de tipo ServicioDirectiva..... 


  anadirEmpleado(){
    let nuevoEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //hacemos uso del servicio

    this.miServicio.muestramensaje("nombre del empleado: " + nuevoEmpleado.nombre) //objeto.metodo

    this.empleados.push(nuevoEmpleado);

  }


}
