import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, ButtonModule, CardModule],
})
export class AnimalsListModule {}
