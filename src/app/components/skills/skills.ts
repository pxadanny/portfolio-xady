import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = [
  {
    "numero": "01",
    "etiqueta": "Interfaces",
    "titulo": "Frontend y móvil",
    "descripcion": "Tecnologías para construir experiencias web y móviles.",
    "icon": "fa-layer-group",
    "skills": [
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png",
        "titulo": "Angular"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo.png",
        "titulo": "TypeScript"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-javascript-is-a-high-level-interpreted-programming-language-logo-shadow-tal-revivo.png",
        "titulo": "JavaScript"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png",
        "titulo": "HTML"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-logo-shadow-tal-revivo.png",
        "titulo": "CSS"
      },
      {
        "icon": "https://img.icons8.com/fluency/50/tailwind_css.png",
        "titulo": "Tailwind CSS"
      },
      {
        "icon": "https://img.icons8.com/color/50/bootstrap--v2.png",
        "titulo": "Bootstrap"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-ionic-a-complete-open-source-sdk-for-hybrid-mobile-app-development-logo-shadow-tal-revivo.png",
        "titulo": "Ionic"
      }
    ]
  },
  {
    "numero": "02",
    "etiqueta": "Lógica y datos",
    "titulo": "Backend y bases de datos",
    "descripcion": "Herramientas para la lógica, los servicios y la información.",
    "icon": "fa-database",
    "skills": [
      {
        "icon": "https://img.icons8.com/color/50/c-sharp-logo-2.png",
        "titulo": "C#"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-net-or-dot-net-a-software-framework-developed-by-microsoft-logo-shadow-tal-revivo.png",
        "titulo": ".NET"
      },
      {
        "icon": "https://img.icons8.com/fluency/50/node-js.png",
        "titulo": "Node JS"
      },
      {
        "icon": "https://img.icons8.com/color/48/api-settings.png",
        "titulo": "REST API"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-mysql-an-open-source-relational-database-management-system-logo-shadow-tal-revivo.png",
        "titulo": "MySQL"
      }
    ]
  },
  {
    "numero": "03",
    "etiqueta": "Flujo de desarrollo",
    "titulo": "Herramientas de trabajo",
    "descripcion": "Entornos y utilidades que acompañan cada etapa del desarrollo.",
    "icon": "fa-code-branch",
    "skills": [
      {
        "icon": "https://img.icons8.com/color/50/git.png",
        "titulo": "Git"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-github-a-web-based-hosting-service-for-version-control-logo-shadow-tal-revivo.png",
        "titulo": "GitHub"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-npm-a-package-manager-for-the-javascript-programming-language-logo-shadow-tal-revivo.png",
        "titulo": "npm"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-visual-studio-code-is-a-source-code-editor-developed-by-microsoft-logo-shadow-tal-revivo.png",
        "titulo": "Visual Studio Code"
      },
      {
        "icon": "https://img.icons8.com/fluency/50/visual-studio.png",
        "titulo": "Visual Studio"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png",
        "titulo": "Postman"
      }
    ]
  },
  {
    "numero": "04",
    "etiqueta": "Trabajo en equipo",
    "titulo": "Diseño y colaboración",
    "descripcion": "Recursos para diseñar, planificar y coordinar proyectos.",
    "icon": "fa-people-group",
    "skills": [
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-figma-a-better-way-to-design-and-gather-feedback-all-in-one-place-logo-shadow-tal-revivo.png",
        "titulo": "Figma"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-jira-a-proprietary-issue-tracking-product-developed-by-atlassian-that-allows-bug-tracking-logo-shadow-tal-revivo.png",
        "titulo": "Jira"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-trello-a-web-based-list-making-application-for-multi-platform-logo-shadow-tal-revivo.png",
        "titulo": "Trello"
      },
      {
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-shadow-tal-revivo.png",
        "titulo": "Slack"
      }
    ]
  }
];
}
