import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/shared/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [ new Ingredient("Onions",1), new Ingredient("Red Bell Pepper", 1), new Ingredient("Chicken", 1)]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(addedIngredient: Ingredient){
    this.ingredients.push(addedIngredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
