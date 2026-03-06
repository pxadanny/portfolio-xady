import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  skills=[
    {
      icon:'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png',
      titulo:'Angular'
    }
  ]
}
