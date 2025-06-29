import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-geste',
  imports: [CommonModule],
  templateUrl: './geste.component.html',
  styleUrl: './geste.component.css',
})
export class GesteComponent {
  readonly estimationEuros = input.required<string>();
}
