import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TAnimal, TAnimalResponnse } from '../../models/types/animals';

@Injectable({ providedIn: 'root' })
export class AnimalsServices {
  private url = 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals';

  constructor(private http: HttpClient) {}

  getAllAnimals(): Observable<TAnimal[]> {
    return this.http.get<TAnimalResponnse>(this.url).pipe(
      map((response) => {
        console.log(response);
        return response.items;
      })
    );
  }
}
