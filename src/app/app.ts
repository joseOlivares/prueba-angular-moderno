import { Component } from '@angular/core';
import { MenuSummary } from './menu/menu-summary/menu-summary';
import { RecipeList } from './recipes/recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [MenuSummary, RecipeList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
