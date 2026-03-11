import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuOpen = false;

  goToSection(section: string) {
  this.menuOpen = false;

  setTimeout(() => {
    document.getElementById(section)?.scrollIntoView({
      
    });
  }, 100);
}

}
