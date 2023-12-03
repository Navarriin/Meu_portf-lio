import { Component, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Meus SubComponents
import { DivisorComponent } from '../divisor/divisor.component';
import { SkillComponent } from './skill/skill.component';
@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule, DivisorComponent, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  ids: string[] = ['1', '2', '3', '4', '5', '6'];
  text: string = 'Ver mais';

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  openSkills(): void {
    const value: HTMLElement =
      this.element.nativeElement.querySelector('.skills');

    if (value.classList.contains('openSkills')) {
      this.renderer.removeClass(value, 'openSkills');
      this.text = 'Ver mais';
    } else {
      this.renderer.addClass(value, 'openSkills');
      this.text = 'Ver menos';
    }
  }
}
