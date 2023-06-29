import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

//Configuracion de rutas
//Path: La URL de la ruta
//Component: Componente que se muestra cuando se accede a la ruta
const routes: Routes = [
  { path:'', component:HomeComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path:'characters',component:CharactersComponent},
  { path: 'contact',component:ContactComponent},
  { path: 'login', component: LoginComponent},
];


//Método 'forRoot': Añade las rutas al módulo principal.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
