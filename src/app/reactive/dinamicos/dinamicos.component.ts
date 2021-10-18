import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  public nuevoJuego:string = '';

  miFormulario : FormGroup = this.fb.group({
    nombre :[,[Validators.required,Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Dying ligth',Validators.required],
      ['Cyberpunk 2077',Validators.required]
    ], Validators.required )
  })

  constructor(private fb:FormBuilder) { }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }


  campoEsValido(campo:string){
    return  this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  agregarJuego(){
    
  }

  eliminar(index :number){
    
  }


}
