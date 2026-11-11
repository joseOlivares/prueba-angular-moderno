import { Component, effect, inject, signal } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MenuStore } from '../../services/menu-store';
import { RecipeApi } from '../../services/recipe-api';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  private readonly recipeApi = inject(RecipeApi);
  private readonly menuStore = inject(MenuStore);

  protected readonly recipes = signal<Recipe[]>([]);
  protected readonly search = signal('');
  protected readonly filtered = signal<Recipe[]>([]);

  constructor() {
    effect(() => {
      console.log('Recetas cargadas:', this.recipes().length);
      this.recipeApi.getAll().subscribe((recipes) => this.recipes.set(recipes));
    });

    effect(() => {
      this.filtered.set(this.recipes().filter((recipe) => recipe.name.includes(this.search())));
    });
  }

  protected onSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  protected addToMenu(recipe: Recipe): void {
    this.menuStore.add(recipe);
  }
}
