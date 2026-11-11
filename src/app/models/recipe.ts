export interface Recipe {
  id: number;
  name: string;
  caloriesPerServing: number;
}

export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
