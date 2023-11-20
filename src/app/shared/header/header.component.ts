import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  toggleMenu(): void {
    const nav: HTMLElement | null =
      this.element.nativeElement.querySelector('#nav');

    if (nav?.classList.contains('activate')) {
      this.renderer.removeClass(nav, 'activate');
    } else {
      this.renderer.addClass(nav, 'activate');
    }
  }
}
