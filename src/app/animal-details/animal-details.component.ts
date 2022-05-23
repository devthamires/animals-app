import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TAnimal } from '../shared/models/types/animals';
import { AnimalsServices } from '../shared/services/animals/animals.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent implements OnInit {
  animal$!: Observable<TAnimal | undefined>;

  constructor(private animalService: AnimalsServices) {}

  ngOnInit(): void {
    console.log('AQUI');
  }
}
