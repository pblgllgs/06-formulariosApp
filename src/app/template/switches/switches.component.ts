import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  public persona  = {
    genero: '',
    notificaciones: false
  }

  public terminosYCondiciones: boolean = false;

}
