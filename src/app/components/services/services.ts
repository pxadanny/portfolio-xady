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
      icon: 'fa-window-maximize',
      title: 'Desarrollo web',
      description: 'Sitios e interfaces modernas que combinan diseño cuidado, funcionalidad y una experiencia fluida.',
      detail: 'Interfaces que conectan con tus usuarios',
    },
    {
      number: '02',
      icon: 'fa-mobile-screen-button',
      title: 'Experiencias adaptables',
      description: 'Diseños pensados para funcionar y lucir bien en computadora, tablet y celular.',
      detail: 'Un mismo cuidado en cada pantalla',
    },
    {
      number: '03',
      icon: 'fa-code-branch',
      title: 'Aplicaciones bien construidas',
      description: 'Componentes organizados y soluciones que facilitan la evolución y el mantenimiento del proyecto.',
      detail: 'Código preparado para crecer',
    },
  ];
}
