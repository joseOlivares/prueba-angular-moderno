import { Injectable, computed, signal } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({ providedIn: 'root' })
export class MenuStore {
  readonly items = signal<Recipe[]>([]);

  readonly count = computed(() => this.items().length);
  readonly totalCalories = computed(() =>
    this.items().reduce((sum, recipe) => sum + recipe.caloriesPerServing, 0),
  );

  add(recipe: Recipe): void {
    this.items().push(recipe);
  }
}
