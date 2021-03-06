import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

import {Recipe} from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() index: number;
  // @Output() public recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

}
