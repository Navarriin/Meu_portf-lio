import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

// Meu component
import { DivisorComponent } from '../divisor/divisor.component';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, DivisorComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  text: string = 'Ver mais';
  projects: string[] = ['1', '2', '3', '4', '5', '6'];

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  openProjects(): void {
    const project: HTMLElement =
      this.element.nativeElement.querySelector('.projects__content');

    if (project.classList.contains('open')) {
      this.renderer.removeClass(project, 'open');
      this.text = 'Ver mais';
    } else {
      this.renderer.addClass(project, 'open');
      this.text = 'Ver menos';
    }
  }
}
