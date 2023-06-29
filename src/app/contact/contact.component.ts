//Importamos el decorador "component" para crear componentes

import { Component } from '@angular/core';

//El decorador define el componente.
//Es un objeto con varias propiedades(selector, estructura(html) y estilo(css))
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

//Aqui especificamos las propiedades que tiene el componente.
//Las propiedades se inicializan con '' porque estaran vacías hasta que se escriba en ellos.
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  haVistoRickMorty: boolean = false;
  mensaje: string = '';


//Este método hace que se muestren los valores de registro por la consola
//Dentro de registrar es donde tenemos que agregar los datos del servidor
  registrar() {
    // + lógica de registro (pendiente)
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Ha visto Rick and Morty:', this.haVistoRickMorty);
    console.log('Mensaje:', this.mensaje);
  }


//Método para restablecer el formulario.
  limpiar() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.haVistoRickMorty = false;
    this.mensaje = '';

  }
}
