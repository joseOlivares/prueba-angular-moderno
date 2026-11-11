import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe, RecipesResponse } from '../models/recipe';

// API: https://dummyjson.com/recipes?limit=20&select=name,caloriesPerServing
@Injectable({ providedIn: 'root' })
export class RecipeApi {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://dummyjson.com/recipes?limit=20&select=name,caloriesPerServing';

  getAll(): Observable<Recipe[]> {
    return this.http.get<RecipesResponse>(this.url).pipe(map((response) => response.recipes));
  }
}
