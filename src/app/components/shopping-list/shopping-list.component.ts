import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [ new Ingredient("Onions",1), new Ingredient("Red Bell Pepper", 1), new Ingredient("Chicken", 1)]

  
  addIngredient(addedIngredient: Ingredient){
    this.ingredients.push(addedIngredient)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
