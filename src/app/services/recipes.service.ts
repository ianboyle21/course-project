import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../components/recipes/recipe.model'
import { Ingredient } from '../components/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();
  ingredientsToBuy = new EventEmitter<Ingredient[]>()
  private recipes: Recipe[] = [ 
    new Recipe(
    'A test recipe', 
    'This is a test.', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574', 
    [
      new Ingredient('Bread', 1)
    ]
  ), 
  new Recipe('Another test recipe', 
  'This is another test.', 
  'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574', 
  [new Ingredient('Bread', 1), 
  new Ingredient('Rice', 3)])
];

  constructor(private _sLService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
  
  addToShoppingList(ingredients: Ingredient[]): void {
    this._sLService.addToShoppingList(ingredients)
  }

}
