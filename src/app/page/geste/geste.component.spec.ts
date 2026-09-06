import { beforeEach, describe, expect, it } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GesteComponent } from './geste.component';

describe('GesteComponent', () => {
  let fixture: ComponentFixture<GesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GesteComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(GesteComponent);
  });

  it('shows the amount granted for a single piece of work', () => {
    fixture.componentRef.setInput('estimationEuros', '5 000 €');

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.number').textContent,
    ).toContain('5 000 €');
  });

  it('carries the refusal the same way as an amount', () => {
    fixture.componentRef.setInput('estimationEuros', 'Non éligible');

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.number').textContent,
    ).toContain('Non éligible');
  });
});
