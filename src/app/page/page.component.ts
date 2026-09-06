import { ChangeDetectionStrategy, Component } from '@angular/core';
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

/**
 * Écrit un montant comme la table des tranches le fait : une espace tous les trois chiffres.
 *
 * `Intl` sépare avec une espace fine insécable, la table avec une espace ordinaire. Sans cette
 * normalisation, les tranches calculées au-delà de cinq occupants ne s'afficheraient pas comme
 * celles qui les précèdent.
 */
function formatAmount(amount: number): string {
  // `\s` couvre l'espace fine insécable comme l'insécable, selon ce que rend l'environnement.
  return new Intl.NumberFormat('fr-FR').format(amount).replace(/\s/g, ' ');
}

@Component({
  selector: 'app-page',
  imports: [GesteComponent, GlobaleComponent, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        (latestPrice, index) =>
          latestPrice + increments[index] * extraHabitants,
      );
      const amounts = prices.map(formatAmount);
      this.priceList = [
        `Inférieur à ${amounts[0]} €`,
        `Entre ${amounts[1]} € et ${amounts[2]} €`,
        `Entre ${amounts[3]} € et ${amounts[4]} €`,
        `Supérieur à ${amounts[4]} €`,
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
