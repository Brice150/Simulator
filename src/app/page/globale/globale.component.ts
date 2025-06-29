import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-globale',
  imports: [CommonModule],
  templateUrl: './globale.component.html',
  styleUrl: './globale.component.css',
})
export class GlobaleComponent {
  @Input() estimationPercent!: number;
}
