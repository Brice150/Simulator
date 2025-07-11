import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  estimationEurosLists,
  estimationPercentList,
  increments,
  latestPrices,
  priceLists,
  workTypes,
} from '../shared/data/data';
import { GesteComponent } from './geste/geste.component';
import { GlobaleComponent } from './globale/globale.component';

@Component({
  selector: 'app-page',
  imports: [CommonModule, GesteComponent, GlobaleComponent, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  habitantsNumber: number = 1;
  price!: number | null;
  workType!: number | null;
  displayGeste: boolean = false;
  displayGlobale: boolean = false;
  estimationEuros!: string;
  estimationPercent!: number;
  globaleSelected: boolean = true;
  gesteSelected: boolean = false;
  priceList: string[] = priceLists[1];
  increments: number[] = increments;
  latestPrices: number[] = latestPrices;
  workTypes: string[] = workTypes;

  plusOne(): void {
    this.habitantsNumber = this.habitantsNumber + 1;
    this.refreshPriceList();
  }

  minusOne(): void {
    if (this.habitantsNumber > 1) {
      this.habitantsNumber = this.habitantsNumber - 1;
      this.refreshPriceList();
    }
  }

  refreshPriceList(): void {
    this.priceList = [];
    if (this.habitantsNumber < 6) {
      this.priceList = priceLists[this.habitantsNumber];
    } else {
      this.increments = [...increments];
      this.latestPrices = [...latestPrices];
      for (let i: number = 0; i < this.increments.length; i++) {
        this.latestPrices[i] =
          this.latestPrices[i] +
          this.increments[i] * (this.habitantsNumber - 5);
      }
      this.priceList[0] = `Inférieur à ${this.latestPrices[0]} €`;
      this.priceList[1] = `Entre ${this.latestPrices[1]} € et ${this.latestPrices[2]} €`;
      this.priceList[2] = `Entre ${this.latestPrices[3]} € et ${this.latestPrices[4]} €`;
      this.priceList[3] = `Supérieur à ${this.latestPrices[4]} €`;
    }
    this.price = null;
    this.handleDisplay();
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
    if (this.globaleSelected && this.price) {
      this.displayGeste = false;
      this.displayGlobale = true;
      this.estimationPercent = estimationPercentList[this.price];
    } else if (this.gesteSelected && this.price && this.workType) {
      this.displayGeste = true;
      this.displayGlobale = false;
      this.estimationEuros = estimationEurosLists[this.workType][this.price];
    } else {
      this.displayGeste = false;
      this.displayGlobale = false;
    }
  }
}
