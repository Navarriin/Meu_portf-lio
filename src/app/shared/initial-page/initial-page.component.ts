import { Component, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'initial-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './initial-page.component.html',
  styleUrls: [
    './initial-page.component.scss',
    './initial-page.responsivity.scss',
  ],
})
export class InitialPageComponent {
  constructor() {}

  ngOnInit(): void {}
}
