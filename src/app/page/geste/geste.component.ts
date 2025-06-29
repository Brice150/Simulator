import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-geste',
    templateUrl: './geste.component.html',
    styleUrl: './geste.component.css',
    standalone: false
})
export class GesteComponent {
  @Input() estimationEuros!: string;
}
