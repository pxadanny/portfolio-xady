import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
  {
    titulo: 'Enterprise SaaS Dashboard',
    descripcion: 'Panel de administración con gestión de datos en tiempo real y gráficas interactivas.',
    imagen: 'https://img.freepik.com/vector-gratis/panel-usuario-panel-infografia_52683-30026.jpg?w=360',
    tecnologias: ['Angular', 'Tailwind', 'NgRx'],
    demo: '#',
    codigo: '#'
  }
  
  
];
}
