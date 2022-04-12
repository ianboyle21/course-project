import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  // @Input() showRecipes = true;
  // @Output() showRecipes = new EventEmitter<boolean>()
  // @Output() showShoppingList = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
