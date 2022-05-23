import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TAnimal } from '../shared/models/types/animals';
import { AnimalsServices } from '../shared/services/animals/animals.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent implements OnInit {
  animal!: TAnimal;
  constructor(
    private animalService: AnimalsServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.animalService.animals) {
      this.animal = this.animalService.getAnimalById(
        this.route.snapshot.params['id']
      );
    }
  }
}
