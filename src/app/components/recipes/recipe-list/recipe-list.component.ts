import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 public recipes: Recipe[] = [];

  @Output() loadedRecipe = new EventEmitter<Recipe>() ;
  loadRecipe(recipe: Recipe){
    this.loadedRecipe.emit(recipe)
  }
  constructor(private _recipeService: RecipesService) { }

  ngOnInit(): void {
     this.recipes = this._recipeService.getRecipes()
  }
}
