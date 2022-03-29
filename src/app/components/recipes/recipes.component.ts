import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  displayedRecipe: Recipe;
  loadRecipe(recipe: Recipe){
    this.displayedRecipe = recipe;
    console.log("From Recipe: ", this.displayedRecipe)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
