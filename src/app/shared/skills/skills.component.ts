import { Component } from '@angular/core';
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
  ids: string[] = ['1', '2', '3', '4', '5'];
}
