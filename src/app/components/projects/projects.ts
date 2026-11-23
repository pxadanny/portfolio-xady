import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly project = {
    title: 'Simpsonpedia',
    category: 'Aplicación web · Proyecto personal',
    description: 'Una experiencia web para explorar el universo de Los Simpson. Reúne personajes, episodios y locaciones en un catálogo interactivo con fichas detalladas, búsqueda global y una colección personal de favoritos.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'API REST'],
    features: [
      'Exploración de personajes, episodios y locaciones',
      'Búsqueda unificada y descubrimiento aleatorio',
      'Favoritos guardados en el navegador',
    ],
    demo: 'https://pxadanny.github.io/simpsonpedia/characters',
    code: 'https://github.com/pxadanny/simpsonpedia',
  };
}
