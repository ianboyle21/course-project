import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isClicked = false;
  @HostBinding('class.open') open: string;

  @HostListener('click') onClick(){
    this.isClicked = !this.isClicked
    this.isClicked ? this.open = 'open' : this.open = ''
  }
  constructor() { }

}
