import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../data/projects.data';

@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() id: string = '0';
  protected projectTitle: string = '';
  protected projectdescription: string = '';
  protected repository: string = '';
  protected ar: string = '';
  protected target: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setValuesComponents(this.id);
  }

  setValuesComponents(id: string | null): void {
    const values = Projects.filter((value) => value.id === id)[0];
    this.projectTitle = values.title;
    this.projectdescription = values.description;
    this.repository = values.repository;
    this.ar = values.ar;
    this.target = values.target;
  }
}
