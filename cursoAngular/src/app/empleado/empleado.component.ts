import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre = "Maribel";
  apellido = "lopez"
  private edad = 30;

  empresa = "google";

  disabledProperty= false;
  checkedProperty=false;

  infoUsuario="No hay usuario registrado";

  getEdad(){
    return this.edad; 
  }

  nombreEmpresa(value:String){} //funcion de evento

  // cambiarEmpresa(ev:Event){
  //   this.empresa= (<HTMLInputElement>ev.target).value;
  // }

  //funcion que simula una llamada a bbdd por ejemplo y se encarga de modificar la propiiedad para mostrarlo despues en el html 

  usuarioRegistrado(){
      this.checkedProperty=false;

  }


  handleUsuarioRegistrado(ev:Event){

   if((<HTMLInputElement>ev.target).checked==true ){
    this.infoUsuario="Usuario registrado";
   }else{
    this.infoUsuario="Usuario no registrado";
   }
   
   
   }
 

  
}
