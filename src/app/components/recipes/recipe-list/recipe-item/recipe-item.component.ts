import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Recipe} from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() public recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    console.log("From Recipe item ", recipe)
  }

  ngOnInit(): void {
  }

}
