import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.responsivity.scss'],
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  toggleMenu(): void {
    const active: HTMLElement =
      this.element.nativeElement.querySelector('#nav');

    if (active.classList.contains('activate')) {
      this.renderer.removeClass(active, 'activate');
    } else {
      this.renderer.addClass(active, 'activate');
    }
  }
}
