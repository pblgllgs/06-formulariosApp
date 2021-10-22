import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren:() => import('./reactive/reactive.module').then( m => m.ReactiveModule),
    canLoad:[  ],
    canActivate : []
  },
  {
    path: 'template',
    loadChildren:() => import('./template/template.module').then( m => m.TemplateModule),
    canLoad:[  ],
    canActivate : []
  },
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule),
    canLoad:[  ],
    canActivate : []
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
