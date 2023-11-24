import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
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

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const active: HTMLElement = this.getElement();
    this.renderer.removeClass(active, 'activate');
  }

  toggleMenu(): void {
    const active: HTMLElement = this.getElement();
    if (active.classList.contains('activate')) {
      this.renderer.removeClass(active, 'activate');
    } else {
      this.renderer.addClass(active, 'activate');
    }
  }

  getElement(): HTMLElement {
    const active: HTMLElement =
      this.element.nativeElement.querySelector('#nav');
    return active;
  }
}
