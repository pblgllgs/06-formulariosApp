import { Component } from '@angular/core';


interface MenuItem{
  texto: string;
  ruta:string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  public templateMenus: MenuItem[] = [
    {
      texto:'Básicos',
      ruta: './template/basicos',
    },
    {
      texto:'Dinamicos',
      ruta:'./template/dinamicos'
  
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    }
  ];

  public ReactiveMenus: MenuItem[] = [
    {
      texto:'Básicos',
      ruta: './reactive/basicos',
    },
    {
      texto:'Dinamicos',
      ruta:'./reactive/dinamicos'
  
    },
    {
      texto:'Switches',
      ruta:'./reactive/switches'
    }
  ];

  public AuthMenu: MenuItem[] = [
    {
      texto:'Login',
      ruta: './auth/login',
    },
    {
      texto:'Registro',
      ruta:'./auth/registro'
  
    }
  ];


}
