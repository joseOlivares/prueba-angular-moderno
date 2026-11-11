import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class RecipeCard {
  readonly recipe = input.required<Recipe>();
  readonly add = output<Recipe>();

  protected readonly favorite = signal(false);

  protected toggleFavorite(): void {
    this.favorite.update((value) => !value);
  }

  protected label(): string {
    console.log('render RecipeCard', this.recipe().id);
    return `${this.recipe().name} - ${this.recipe().caloriesPerServing} kcal`;
  }
}
