import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Input() public recipes: Recipe[] = [];
  constructor(private _recipeService: RecipesService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
     this.recipes = this._recipeService.getRecipes()
  }

  onNewRecipe(){
    this._router.navigate(['new'], {relativeTo: this._route})
  }
}


