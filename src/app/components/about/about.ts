import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cards = [
    {
      icon: 'fa-lightbulb',
      titulo: 'Curiosidad',
      descripcion: 'Explorar ideas, cuestionar lo establecido y encontrar nuevas formas de resolver problemas.'
    },
    {
      icon: 'fa-object-group',
      titulo: 'Diseño con intención',
      descripcion: 'Cuidar la claridad, la estética y la experiencia de cada interfaz.'
    },
    {
      icon: 'fa-code',
      titulo: 'Atención al detalle',
      descripcion: 'Construir componentes útiles, ordenados y fáciles de mantener.'
    }
  ];
}
