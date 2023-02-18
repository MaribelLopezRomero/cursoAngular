import { Component, Input } from '@angular/core';
import { Empleado } from '../directivas-empleados/empleadoModel';

@Component({
  selector: 'app-directiva-empleado-hijo',
  templateUrl: './directiva-empleado-hijo.component.html',
  styleUrls: ['./directiva-empleado-hijo.component.css']
})
export class DirectivaEmpleadoHijoComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;


  arrayCaracteristicas:string[]=[];


//Output
  
  agregarCaracteristica(nuevaCaracteristica: string) {
    console.log(nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }



}
