import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  public miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator]],
    username: ['',[Validators.required, this.vs.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, ]]
  },{
    validators : [ this.vs.camposIguales('password','password2')]
  });

  get emailErrorMsg():string{

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'el email es obligatorio';
    }else if(errors?.pattern){
      return 'El formato del correo no es valido';
    }else if(errors?.emailTomado){
      return 'El email ya esta registrado';
    }
    return '';
  }

  constructor(private fb : FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pablo Gallegos',
      email: 'pbl.gllgs@gmail.com',
      username: 'tokiLeftraru',
      password:'123123',
      password2:'123123'
    })
  }

  campoNoValido(campo :string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched();
  }

}
