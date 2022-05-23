import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { TAnimal, TAnimalResponnse } from '../../models/types/animals';

@Injectable({ providedIn: 'root' })
export class AnimalsServices {
  private url = 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals';

  private currentAnimals$ = new Subject<TAnimal[]>();

  constructor(private http: HttpClient) {}

  getAllAnimals(): Observable<TAnimal[]> {
    return this.http.get<TAnimalResponnse>(this.url).pipe(
      map(({ items }) => {
        this.currentAnimals$.next(items);
        return items;
      })
    );
  }
}
