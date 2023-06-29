

//Importamos los módulos y operadores nevesarioa

import { tap } from 'rxjs/operators'; //Hasta que no he puesto esto no me ha funcionado nada
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


//Este decorador nos indica que este servicio lo podemos inyectar como una dependencia en otro componente
@Injectable({
  providedIn: 'root' //Indica que esta disponible en toda la aplicación
})


export class CharacterService {
  public apiUrl = 'https://rickandmortyapi.com/api/character';

//Para realizar solicitudes Http
  constructor(public http: HttpClient) { }

//Pipe -- encadena operadores de RxJS para transformar el flujo de datos.
//Con el operador tap lo que hacemos es una accion secundaria --- nos muestra por consola la respuesta
//Observable --  representacion de una secuencia valores que se pueden observar a lo alrgo del tiempo.
//Si son solicitudes http emite un valor cuando se reciba la respuesta del servidor.

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => {
        console.log('API Response:', data);
      })
    );
  }


}
