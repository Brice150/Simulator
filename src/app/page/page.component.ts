import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GesteModule } from './geste/geste.module';
import { GlobaleModule } from './globale/globale.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, GesteModule, GlobaleModule, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  habitantsNumber: number = 1;
  price!: number;
  workType: string = '';
  displayGeste: boolean = false;
  displayGlobale: boolean = false;
  estimationEuros!: number;
  estimationPercent!: number;
  globaleSelected: boolean = true;
  gesteSelected: boolean = false;

  plusOne(): void {
    this.habitantsNumber = this.habitantsNumber + 1;
  }

  minusOne(): void {
    if (this.habitantsNumber > 1) {
      this.habitantsNumber = this.habitantsNumber - 1;
    }
  }

  priceChange(): void {
    this.handleDisplay();
  }

  workTypeChange(): void {
    this.handleDisplay();
  }

  selectGlobale(): void {
    this.globaleSelected = true;
    this.gesteSelected = false;
    this.handleDisplay();
  }

  selectGeste(): void {
    this.globaleSelected = false;
    this.gesteSelected = true;
    this.handleDisplay();
  }

  handleDisplay(): void {
    if (this.globaleSelected && this.price && this.price > 0) {
      this.displayGeste = false;
      this.displayGlobale = true;
    } else if (
      this.gesteSelected &&
      this.price &&
      this.price > 0 &&
      this.workType !== ''
    ) {
      this.displayGeste = true;
      this.displayGlobale = false;
    } else {
      this.displayGeste = false;
      this.displayGlobale = false;
    }
  }
}
