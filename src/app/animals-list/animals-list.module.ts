import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list.component';
import { ButtonModule } from '../shared/components/button/button.module';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, ButtonModule],
})
export class AnimalsListModule {}
