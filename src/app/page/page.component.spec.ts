import { beforeEach, describe, expect, it } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  estimationEurosLists,
  estimationPercentList,
  priceLists,
} from '../shared/data/data';
import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let fixture: ComponentFixture<PageComponent>;
  let component: PageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('opens on a single occupant and its income brackets', () => {
    expect(component.habitantsNumber).toBe(1);
    expect(component.priceList).toEqual(priceLists[1]);
    expect(component.displayGlobale).toBe(false);
    expect(component.displayGeste).toBe(false);
  });

  it('follows the household size through the brackets of the table', () => {
    component.plusOne();
    component.plusOne();

    expect(component.habitantsNumber).toBe(3);
    expect(component.priceList).toEqual(priceLists[3]);
  });

  it('never goes below a single occupant', () => {
    component.minusOne();

    expect(component.habitantsNumber).toBe(1);
    expect(component.priceList).toEqual(priceLists[1]);
  });

  it('computes the brackets itself beyond the five of the table', () => {
    for (let added = 0; added < 5; added++) {
      component.plusOne();
    }

    expect(component.habitantsNumber).toBe(6);
    // One occupant over the reference, so every bound of the last row of the table is raised by
    // one increment. The amounts are grouped like those of the table, so that a household of six
    // reads exactly like a household of five.
    expect(component.priceList).toEqual([
      'Inférieur à 45 047 €',
      'Entre 45 049 € et 57 743 €',
      'Entre 57 745 € et 81 565 €',
      'Supérieur à 81 565 €',
    ]);
  });

  it('drops the chosen income when the household changes, its brackets having moved', () => {
    component.price = 0;
    component.priceChange();
    expect(component.displayGlobale).toBe(true);

    component.plusOne();

    expect(component.price).toBeNull();
    expect(component.displayGlobale).toBe(false);
  });

  it('estimates a whole renovation as a share of the works', () => {
    component.price = 1;

    component.priceChange();

    expect(component.displayGlobale).toBe(true);
    expect(component.displayGeste).toBe(false);
    expect(component.estimationPercent).toBe(estimationPercentList[1]);
  });

  it('waits for the type of works before estimating a single one', () => {
    component.price = 0;
    component.selectGeste();

    expect(component.displayGeste).toBe(false);

    component.workType = 6;
    component.workTypeChange();

    expect(component.displayGeste).toBe(true);
    expect(component.estimationEuros).toBe(estimationEurosLists[6][0]);
  });

  it('says so when the income makes the household ineligible', () => {
    component.price = 3;
    component.workType = 0;

    component.selectGeste();

    expect(component.estimationEuros).toBe('Non éligible');
  });

  it('swaps the estimation when the project changes', () => {
    component.price = 0;
    component.workType = 0;
    component.selectGeste();
    expect(component.displayGeste).toBe(true);

    component.selectGlobale();

    expect(component.displayGlobale).toBe(true);
    expect(component.displayGeste).toBe(false);
    expect(component.estimationPercent).toBe(estimationPercentList[0]);
  });

  it('offers the type of works only once a single one is being estimated', () => {
    expect(fixture.nativeElement.querySelectorAll('select').length).toBe(1);

    component.selectGeste();
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('select').length).toBe(2);
  });

  it('counts the occupants from the buttons of the form', () => {
    const [remove, add]: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.button.change'),
    );

    add.click();
    add.click();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.number').textContent.trim(),
    ).toBe('3');

    remove.click();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.number').textContent.trim(),
    ).toBe('2');
  });
});
