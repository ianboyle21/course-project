import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) inputNameElementRef: ElementRef;
  @ViewChild('amountInput', {static: false}) inputAmountElementRef: ElementRef; 


  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    
  }
  onAdd(){
    const newIngredient = new Ingredient(this.inputNameElementRef.nativeElement.value, this.inputAmountElementRef.nativeElement.value)
    this._shoppingListService.addIngredient(newIngredient)
  }

}
