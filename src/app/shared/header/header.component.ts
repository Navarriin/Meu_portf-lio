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

  ngOnInit() {
    this.ClickMenu();
  }

  toggleMenu(): void {
    const active: HTMLElement =
      this.element.nativeElement.querySelector('#nav');

    if (active.classList.contains('activate')) {
      this.renderer.removeClass(active, 'activate');
    } else {
      this.renderer.addClass(active, 'activate');
    }
  }

  ClickMenu(): void {
    const buttons: NodeListOf<HTMLElement> =
      this.element.nativeElement.querySelectorAll('.button');

    buttons.forEach((button: HTMLElement) => {
      button.addEventListener('click', () => {
        this.removeButton();
        this.renderer.addClass(button, 'select');
      });
    });
  }

  removeButton(): void {
    const remove: HTMLElement | null =
      this.element.nativeElement.querySelector('.button.select');

    this.renderer.removeClass(remove, 'select');
  }
}
