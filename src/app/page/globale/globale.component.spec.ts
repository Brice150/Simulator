import { beforeEach, describe, expect, it } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobaleComponent } from './globale.component';

describe('GlobaleComponent', () => {
  let fixture: ComponentFixture<GlobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobaleComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(GlobaleComponent);
  });

  it('shows the share granted for a whole renovation', () => {
    fixture.componentRef.setInput('estimationPercent', 80);

    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.number').textContent,
    ).toContain('80');
  });

  it('follows the share it is given', () => {
    fixture.componentRef.setInput('estimationPercent', 35);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('35');
    expect(fixture.nativeElement.textContent).not.toContain('80');
  });
});
