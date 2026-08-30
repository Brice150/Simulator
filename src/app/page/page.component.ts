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

const REFERENCE_HABITANTS = 5;

@Component({
  selector: 'app-page',
  imports: [GesteComponent, GlobaleComponent, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  habitantsNumber = 1;
  price: number | null = null;
  workType: number | null = null;
  displayGeste = false;
  displayGlobale = false;
  estimationEuros = '';
  estimationPercent = 0;
  globaleSelected = true;
  gesteSelected = false;
  priceList: string[] = [...priceLists[1]];
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
    if (this.habitantsNumber <= REFERENCE_HABITANTS) {
      this.priceList = [...priceLists[this.habitantsNumber]];
    } else {
      const extraHabitants = this.habitantsNumber - REFERENCE_HABITANTS;
      const prices = latestPrices.map(
        (latestPrice, index) => latestPrice + increments[index] * extraHabitants
      );
      this.priceList = [
        `Inférieur à ${prices[0]} €`,
        `Entre ${prices[1]} € et ${prices[2]} €`,
        `Entre ${prices[3]} € et ${prices[4]} €`,
        `Supérieur à ${prices[4]} €`,
      ];
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
    if (this.globaleSelected && this.price !== null) {
      this.displayGeste = false;
      this.displayGlobale = true;
      this.estimationPercent = estimationPercentList[this.price];
    } else if (
      this.gesteSelected &&
      this.price !== null &&
      this.workType !== null
    ) {
      this.displayGeste = true;
      this.displayGlobale = false;
      this.estimationEuros = estimationEurosLists[this.workType][this.price];
    } else {
      this.displayGeste = false;
      this.displayGlobale = false;
    }
  }
}
