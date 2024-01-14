import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-globale',
  templateUrl: './globale.component.html',
  styleUrl: './globale.component.css',
})
export class GlobaleComponent {
  @Input() estimationPercent!: number;
}
