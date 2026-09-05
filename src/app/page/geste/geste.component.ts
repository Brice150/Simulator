import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-geste',
  templateUrl: './geste.component.html',
  styleUrl: './geste.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GesteComponent {
  readonly estimationEuros = input.required<string>();
}
