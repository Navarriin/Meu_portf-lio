import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Meu component
import { DivisorComponent } from '../divisor/divisor.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [CommonModule, DivisorComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', 'about-me.responsivity.scss'],
})
export class AboutMeComponent {}
