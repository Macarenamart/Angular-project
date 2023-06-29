//Importamos para utilizar todos los servicios y componentes que necesitamos

import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

//Interface con los campos y tipos de dato del objeto
//Modificar!!!! Ponerlo en un archivo a parte "characters.models.ts "

interface Character {
  name:string;
  episode:string[];
  image:string;
}

//Decorador -- Sirve para decorar una clase y convertirla en componente de Angular
//Argumentos -- Objeto de configuración con metadatos que definen al componente
//Forma de definir las propiedades, los métodos y el comportamiento.
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


//En el array Character[] almacenamos todos los personajes con la estructura que definimos en interface
//La propiedad "filteredCharacters" almacena los personajes filtrados, ya sea por nombre o por episodio.
//searchTerm, almacena el término de búsqueda.
//searchEpisode, igual que el anterior pero referido al episodio.
//SearchTerm y searEpisode ambos inician con valores vacíos para que no haya problemas de valores nulos o indef.


export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  searchTerm: string = '';
  searchEpisode: string = '';


//Constructor que utiliza la inyección de dependencias para obtener una instancia del servicio CharacterService.
//El componente CharactersComponent necesita acceder a los métodos y propiedades del servicio CharacterService.
//Marchamos Characterservice como private para seguir el principio de encapsulamiento
//La propiedad solo es necesaria en este componente y no fuera de el.
  constructor(private characterService: CharacterService) { }



//ngOnInit op de inicializacion del componente -- En este caso realiza una operacion cuando characterscomponent se inicializa.
//De esta manera el componente "characterscomponent" obtienen los datos de los personajes a traves del servicio
//Asigna los datos a las propiedades "characters" y "filteredcharacters"
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(response => {    //Obtiene los datos
      this.characters = response.results;
      this.filteredCharacters = this.characters;                     //Se asignan
    });
  }


//Esta funcion es la que usamos para filtrar los personajes segun algunos criterios.
//parametros = a la propiedad por la que se va a filtrar (name o episode)
//El método filter crea un nuevo array con los personajes que cumplen con el criterio.
//El método .some lo usamos para evaluar si un episodio cumple parcialmente con lo escrito

  filterCharacters(property: string, value: string): void {
    this.filteredCharacters = this.characters.filter(character => {
      const nameMatch = character.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const episodeMatch = character.episode.some((episode: string) => episode.includes(this.searchEpisode));
      return nameMatch && episodeMatch;
    });
  }
}


