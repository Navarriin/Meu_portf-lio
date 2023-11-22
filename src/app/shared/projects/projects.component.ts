import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Meu component
import { DivisorComponent } from '../divisor/divisor.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, DivisorComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
