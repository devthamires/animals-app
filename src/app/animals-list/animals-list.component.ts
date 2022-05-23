import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TAnimal } from '../shared/models/types/animals';
import { AnimalsServices } from '../shared/services/animals/animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  animals$!: Observable<TAnimal[]>;

  constructor(private animalService: AnimalsServices, private router: Router) {}

  ngOnInit(): void {
    this.getAnimalsList();
  }

  getAnimalsList() {
    this.animals$ = this.animalService.getAllAnimals();
  }

  goToAnimal(animal: TAnimal) {
    this.router.navigate([`animals`, animal.id]);
  }
}
