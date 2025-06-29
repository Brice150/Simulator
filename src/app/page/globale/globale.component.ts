import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-globale',
    templateUrl: './globale.component.html',
    styleUrl: './globale.component.css',
    standalone: false
})
export class GlobaleComponent {
  @Input() estimationPercent!: number;
}
