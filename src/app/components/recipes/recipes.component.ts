import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  
  displayedRecipe: Recipe;
  constructor(private _recipeService: RecipesService) { }

  ngOnInit(): void {
    this._recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
        this.displayedRecipe = recipe;
    })
  }

}
