import { Component, Input, OnInit } from '@angular/core';

import { RecipesService } from 'src/app/services/recipes.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../shared/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() public recipe: Recipe;

  
  constructor(private _recipeService: RecipesService, private _sLService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngredientsToSl(): void{
    this._recipeService.addToShoppingList(this.recipe.ingredients)
  }
}
