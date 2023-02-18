import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  titulo="Registro de Usuario";
  nombre:string="";
  apellido:string="";
  registrado=false;
  mensaje= "";

    //para la directiva ngFor

    entradas: any;
    

  
    constructor(){
      this.entradas = [
        {titulo:"Pyton cada dia mas presente",
   },
        {titulo:"Java presente esde hace mas de 20 años"},
        {titulo:"Javascipt cada vez mas funcional"},
      ]

    }
  


  registrarUsuario(){
    this.registrado=true
    this.mensaje=`usuario registrado con exito con el nombre ${this.nombre} ${this.apellido}`;
  };




}
