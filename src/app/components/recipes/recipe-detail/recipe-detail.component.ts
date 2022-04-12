import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  public recipe: Recipe;
  id: number;
  
  constructor(private _recipeService: RecipesService, private _sLService: ShoppingListService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // const id = this._route.snapshot.params['id'];
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this._recipeService.getRecipe(this.id)
    })

  }
  addIngredientsToSl(): void{
    this._recipeService.addToShoppingList(this.recipe.ingredients)
  }
  onRecipeEdit() {
    this._router.navigate(['edit'], { relativeTo: this._route})
  }
}
