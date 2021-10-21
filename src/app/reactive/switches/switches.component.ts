import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: false
    });


    /*this.miFormulario.valueChanges.subscribe(form =>{
      delete form.condiciones;
      this.persona = form;
    });*/

    //desetructuracion y sacamos las condiciones del fomulario, actuzalimos el valor de persona
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) =>{
      this.persona = rest;
    });

  };

  miFormulario : FormGroup = this.fb.group({
    genero: ['M', Validators.required ],
    notificaciones: [true, Validators.required ],
    condiciones: [false,Validators.requiredTrue]
  });

  public persona = {
    genero :'F',
    notificaciones: false
  };

  guardar(){
    const formValue = {...this.miFormulario.value}
    console.log(formValue);
    delete formValue.condiciones;

    this.persona = formValue;
  }



}
