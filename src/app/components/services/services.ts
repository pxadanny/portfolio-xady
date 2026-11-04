import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
})
export class Services {
  services = [
    {
      number: '01',
      icon: 'fa-laptop-code',
      title: 'Desarrollo de software',
      description: 'Aplicaciones web, sistemas y soluciones digitales que combinan funcionalidad, estructura y una experiencia de uso clara.',
      detail: 'Soluciones pensadas para evolucionar',
    },
    {
      number: '02',
      icon: 'fa-object-group',
      title: 'Diseño y experiencias digitales',
      description: 'Interfaces intuitivas, atractivas y adaptables que cuidan cada interacción en computadora, tablet y celular.',
      detail: 'Diseño con intención en cada pantalla',
    },
    {
      number: '03',
      icon: 'fa-diagram-project',
      title: 'Integración y tecnología',
      description: 'Conexión entre frontend, backend, APIs y bases de datos para construir aplicaciones que funcionen como un todo.',
      detail: 'Tecnologías que trabajan en conjunto',
    },
  ];
}
