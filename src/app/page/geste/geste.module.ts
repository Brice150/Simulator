import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GesteComponent } from './geste.component';

@NgModule({
  declarations: [GesteComponent],
  exports: [GesteComponent],
  imports: [CommonModule],
})
export class GesteModule {}
