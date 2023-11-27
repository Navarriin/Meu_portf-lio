import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../../../data/skills.data';

@Component({
  selector: 'skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() public id: string = '0';
  protected title: string = '';
  protected description: string = '';
  protected image: string = '';
  protected skill: string = '';

  ngOnInit(): void {
    this.getAttributes(this.id);
  }

  constructor() {}

  getAttributes(id: string): void {
    const value = Skills.filter((value) => value.id === id)[0];
    this.title = value.title;
    this.description = value.description;
    this.image = value.image;
    this.skill = value.level;
  }
}
