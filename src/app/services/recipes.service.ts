import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model'
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  getRecipes() {
    return [
      new Recipe('A test recipe', 'This is a test.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'), new Recipe('Another test recipe', 'This is another test.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
    ]
  }
}
