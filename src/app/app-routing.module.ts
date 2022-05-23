import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'animals',
        pathMatch: 'full',
      },
      {
        path: 'animals',
        component: AnimalsListComponent,
      },
      {
        path: 'animals/:id',
        component: AnimalDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
