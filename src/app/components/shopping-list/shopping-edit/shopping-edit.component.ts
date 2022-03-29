import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) inputNameElementRef: ElementRef;
  @ViewChild('amountInput', {static: false}) inputAmountElementRef: ElementRef; 

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
    
  }
  onAdd(){
    const newIngredient = new Ingredient(this.inputNameElementRef.nativeElement.value, this.inputAmountElementRef.nativeElement.value)
    this.ingredientAdded.emit(newIngredient)

  }

}
