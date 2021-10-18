import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre:string,
  favoritos : Favorito[]
}

interface Favorito{
  id:number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  public nuevoJuego:string = '';

  public persona: Persona = {
    nombre: 'Pablo',
    favoritos: [
      {
        id: 1,
        nombre: 'FarCry'
      },
      {
        id: 2,
        nombre: 'Dying Ligth'
      }
    ]
  };

  agregarJuego(){
    const nuevoFavorito:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( { ...nuevoFavorito } );
    this.nuevoJuego = '';
  }

  guardar(){
    console.log("formulario posteado")
  }

  eliminar(index :number){
    this.persona.favoritos.splice(index,1);
  }

}
