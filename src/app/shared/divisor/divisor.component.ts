import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'divisor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divisor.component.html',
  styleUrl: './divisor.component.scss',
})
export class DivisorComponent {
  @Input() string: string = 'Oi';
}
