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
      icon: 'fa-code',
      titulo:'Desarrollo frontend',
      descripcion:'Creación de interfaces modernas, claras y funcionales utilizando tecnologías web actuales.'
    },
    {
      icon: 'fa-sitemap',
      titulo:'Arquitectura de aplicaciones',
      descripcion:'Organización del código y los componentes para construir aplicaciones escalables, ordenadas y fáciles de mantener.'
    },
    {
      icon: 'fa-laptop-code',
      titulo:'Diseño responsive',
      descripcion: 'Diseño adaptable que garantiza una experiencia visual óptima en computadoras, tablets y dispositivos móviles.'
    },
  ]
}
