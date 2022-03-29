import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'), new Recipe('A test recipe', 'This is a test.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
  ];

  @Output() loadedRecipe = new EventEmitter<Recipe>() ;
  loadRecipe(recipe: Recipe){
    this.loadedRecipe.emit(recipe)
    console.log("From Recipe List: ", this.loadedRecipe)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
