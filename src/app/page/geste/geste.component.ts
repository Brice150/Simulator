import { Component, input } from '@angular/core';

@Component({
  selector: 'app-geste',
  templateUrl: './geste.component.html',
  styleUrl: './geste.component.css',
})
export class GesteComponent {
  readonly estimationEuros = input.required<string>();
}
