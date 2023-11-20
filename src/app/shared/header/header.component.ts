import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}

  toggleMenu(): void {
    const nav: HTMLElement | null = document.getElementById('nav');

    nav?.classList.toggle('active');
  }
}
